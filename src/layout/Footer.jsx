import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const footerColumns = [
  {
    title: "Company Info",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    links: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    links: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    links: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

function Footer() {
  const handleSubscribe = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    alert(`${email} adresi abonelik için gönderildi.`);

    event.currentTarget.reset();
  };

  return (
    <footer className="w-full bg-white">
      {/* ÜST BÖLÜM */}
      <div className="bg-[#fafafa]">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 border-b border-gray-200 px-6 py-8 sm:flex-row">
          <a
            href="/"
            className="text-2xl font-bold text-[#252b42]"
          >
            Bandage
          </a>

          {/* Sosyal medya ikonları */}
          <div className="flex items-center gap-5 text-[#23a6f0]">
            <a
              href="https://www.facebook.com"
              aria-label="Facebook"
              className="transition hover:text-[#168bd0]"
            >
              <FaFacebook size={17} />
            </a>

            <a
              href="https://www.instagram.com"
              aria-label="Instagram"
              className="transition hover:text-[#168bd0]"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.twitter.com"
              aria-label="Twitter"
              className="transition hover:text-[#168bd0]"
            >
              <FaTwitter size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* ORTA BÖLÜM */}
      <div className="mx-auto max-w-5xl px-6 py-9">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[0.8fr_0.8fr_1fr_1fr_2fr] lg:gap-6">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-5 text-sm font-bold text-[#252b42]">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.links.map((link, index) => (
                  <li key={`${column.title}-${link}-${index}`}>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#737373] transition hover:text-[#23a6f0]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ABONELİK FORMU */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-[#252b42]">
              Get In Touch
            </h3>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full overflow-hidden rounded-md border border-[#e6e6e6]"
            >
              <label htmlFor="footer-email" className="sr-only">
                Your Email
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="min-w-0 flex-1 bg-[#f9f9f9] px-3 py-3 text-xs outline-none placeholder:text-[#737373] focus:bg-white"
              />

              <button
                type="submit"
                className="shrink-0 bg-[#23a6f0] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#168bd0]"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-2 text-xs text-[#737373]">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* ALT BÖLÜM */}
      <div className="bg-[#fafafa]">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <p className="text-sm font-bold leading-6 text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;