import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"; // react-router-dom v5; see README for v6
import { toast } from "react-toastify";
import { api } from "../api/axiosInstance";

const PASSWORD_RE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TR_PHONE_RE = /^(\+90|0)?(5\d{9}|[2-4]\d{9})$/; // mobile + landline
const TAX_RE = /^T\d{4}V\d{6}$/; // TXXXXVXXXXXX

// IBAN check (mod 97), Turkish IBANs: TR + 24 digits = 26 chars
function isValidTrIban(value) {
  const iban = value.replace(/\s+/g, "").toUpperCase();
  if (!/^TR\d{24}$/.test(iban)) return false;
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (c) => c.charCodeAt(0) - 55);
  let rem = 0;
  for (const ch of numeric) rem = (rem * 10 + Number(ch)) % 97;
  return rem === 1;
}

const isStoreRole = (r) => r && (String(r.code).toLowerCase() === "store" || /store|ma[ğg]aza/i.test(r.name));
const isCustomerRole = (r) => r && (String(r.code).toLowerCase() === "customer" || /customer|m[üu][şs]teri/i.test(r.name));

// Label above, input, grey hint below; the hint turns into a red message on error
const inputCls = (error) =>
  `w-full h-12 px-4 text-sm text-[#252B42] placeholder:text-[#737373] bg-white border rounded-md outline-none transition focus:ring-2 focus:ring-[#23A6F0]/20 ${
    error ? "border-[#E74040] focus:border-[#E74040]" : "border-[#E6E6E6] focus:border-[#23A6F0]"
  }`;

function Field({ label, hint, error, children }) {
  return (
    <div className="mb-5">
      <label className="block mb-2 text-base font-medium text-[#252B42]">{label} *</label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-[#E74040]">{error.message}</p>
      ) : (
        <p className="mt-2 text-xs text-[#737373]">{hint}</p>
      )}
    </div>
  );
}

export default function SignupPage() {
  const history = useHistory();
  const [roles, setRoles] = useState([]);
  const [submitError, setSubmitError] = useState("");

  const {
    register, handleSubmit, watch, setValue,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    api.get("/roles")
      .then(({ data }) => {
        setRoles(data);
        const customer = data.find(isCustomerRole);
        if (customer) setValue("role_id", String(customer.id)); // Customer by default
      })
      .catch(() => setSubmitError("Could not load roles. Please refresh the page."));
  }, [setValue]);

  const selectedRoleId = watch("role_id");
  const isStore = isStoreRole(roles.find((r) => String(r.id) === String(selectedRoleId)));

  const onSubmit = async (form) => {
    toast.info("onSubmit çalıştı");  
    setSubmitError("");
    const payload = {
      name: form.name,
      email: form.email,
      password: form.password,
      role_id: Number(form.role_id),
    };
    if (isStore) {
      payload.store = {
        name: form.store_name,
        phone: form.store_phone.replace(/\s+/g, ""),
        tax_no: form.tax_no,
        bank_account: form.bank_account.replace(/\s+/g, "").toUpperCase(),
      };
    }
    try {
      await api.post("/signup", payload);
      history.goBack();
      toast.warning("You need to click link in email to activate your account!", {
        toastId: "signup-activation", // prevents duplicates
        autoClose: 8000,
      });
    } catch (err) {
      setSubmitError(err.response?.data?.message || err.response?.data?.error || "Signup failed. Please try again.");
    }
  };

  return (  
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-md mx-auto my-10 px-4 font-['Montserrat',sans-serif] text-[#252B42]">
      <h1 className="mb-6 text-2xl font-bold">Sign Up</h1>

      <Field label="Name" error={errors.name} hint="At least 3 characters.">
        <input className={inputCls(errors.name)} placeholder="Name *" {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })} />
      </Field>

      <Field label="Email address" error={errors.email} hint="We'll never share your email with anyone else.">
        <input type="email" className={inputCls(errors.email)} placeholder="Email *" {...register("email", { required: "Email is required", pattern: { value: EMAIL_RE, message: "Enter a valid email" } })} />
      </Field>

      <Field label="Password" error={errors.password} hint="Min 8 characters with number, lowercase, uppercase and special character.">
        <input type="password" className={inputCls(errors.password)} placeholder="Password *" {...register("password", {
          required: "Password is required",
          pattern: { value: PASSWORD_RE, message: "Min 8 chars with number, lowercase, uppercase and special character" },
        })} />
      </Field>

      <Field label="Confirm password" error={errors.passwordConfirm} hint="Re-enter your password.">
        <input type="password" className={inputCls(errors.passwordConfirm)} placeholder="Confirm password *" {...register("passwordConfirm", {
          required: "Please confirm your password",
          validate: (v) => v === watch("password") || "Passwords do not match",
        })} />
      </Field>

      <Field label="Role" error={errors.role_id} hint="Choose from the list.">
        <div className="relative">
          <select className={`${inputCls(errors.role_id)} appearance-none pr-11`} {...register("role_id", { required: "Select a role" })}>
            {roles.map((r) => <option key={r.id} value={r.id}>{r.name}</option>)}
          </select>
          <svg className="absolute w-4 h-4 -translate-y-1/2 pointer-events-none right-4 top-1/2" viewBox="0 0 24 24" fill="none" stroke="#252B42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </Field>

      {isStore && (
        <>
          <Field label="Store name" error={errors.store_name} hint="At least 3 characters.">
            <input className={inputCls(errors.store_name)} placeholder="Store name *" {...register("store_name", { required: "Store name is required", minLength: { value: 3, message: "At least 3 characters" } })} />
          </Field>

          <Field label="Store phone" error={errors.store_phone} hint="Türkiye phone number, e.g. 05321234567.">
            <input className={inputCls(errors.store_phone)} placeholder="Store phone *" {...register("store_phone", {
              required: "Phone is required",
              validate: (v) => TR_PHONE_RE.test(v.replace(/\s+/g, "")) || "Enter a valid Türkiye phone number",
            })} />
          </Field>

          <Field label="Store tax ID" error={errors.tax_no} hint="Format: TXXXXVXXXXXX (X = digit).">
            <input className={inputCls(errors.tax_no)} placeholder="Store tax ID *" {...register("tax_no", {
              required: "Tax ID is required",
              pattern: { value: TAX_RE, message: "Format must be TXXXXVXXXXXX (X = digit)" },
            })} />
          </Field>

          <Field label="Store bank account" error={errors.bank_account} hint="IBAN, starts with TR, 26 characters.">
            <input className={inputCls(errors.bank_account)} placeholder="Store bank account (IBAN) *" {...register("bank_account", {
              required: "IBAN is required",
              validate: (v) => isValidTrIban(v) || "Enter a valid IBAN",
            })} />
          </Field>
        </>
      )}

      {submitError && (
        <p role="alert" className="px-4 py-3 mb-4 text-sm text-[#E74040] bg-[#FDECEC] rounded-md">{submitError}</p>
      )}

      <button type="submit" disabled={isSubmitting} className="flex items-center justify-center w-full h-12 gap-2 text-sm font-bold text-white bg-[#23A6F0] rounded-md hover:bg-[#1d93d6] disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting && <span className="inline-block w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
