import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../store/actions/clientActions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    register, handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange", defaultValues: { remember: false } });

  const onSubmit = async (form) => {
    try {
      dispatch(loginUser({ email: form.email, password: form.password }, form.remember));
      // PUSH = we arrived from another page of this app; otherwise go home
      if (history.action === "PUSH") history.goBack();
      else history.push("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed. Check your email and password.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="max-w-md mx-auto my-10 px-4 font-['Montserrat',sans-serif] text-[#252B42]">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>

      <Field label="Email address" error={errors.email} hint="We'll never share your email with anyone else.">
        <input type="email" className={inputCls(errors.email)} placeholder="Email *"
          {...register("email", { required: "Email is required", pattern: { value: EMAIL_RE, message: "Enter a valid email" } })} />
      </Field>

      <Field label="Password" error={errors.password} hint="Enter your password.">
        <input type="password" className={inputCls(errors.password)} placeholder="Password *"
          {...register("password", { required: "Password is required" })} />
      </Field>

      <label className="flex items-center gap-2 mb-5 text-sm cursor-pointer">
        <input type="checkbox" className="w-4 h-4 accent-[#23A6F0]" {...register("remember")} />
        Remember me
      </label>

      <button type="submit" disabled={isSubmitting} className="flex items-center justify-center w-full h-12 gap-2 text-sm font-bold text-white bg-[#23A6F0] rounded-md hover:bg-[#1d93d6] disabled:opacity-70 disabled:cursor-not-allowed">
        {isSubmitting && <span className="inline-block w-4 h-4 border-2 border-current rounded-full border-t-transparent animate-spin" aria-hidden="true" />}
        {isSubmitting ? "Logging in..." : "Login"}
      </button>

      <p className="mt-4 text-sm text-center text-[#737373]">
        No account? <Link to="/signup" className="font-bold text-[#23A6F0]">Sign up</Link>
      </p>
    </form>
  );
}
