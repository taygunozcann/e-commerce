import { useState } from "react";
import {
  FaRegUser,
  FaSearch,
  FaShoppingCart,
  FaRegHeart,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import UserInfo from "../components/HeaderComponents/UserInfo";
import CategoryDropdown from "../components/HeaderComponents/CategoryDropdown";
import CategoryAccordion from "../components/HeaderComponents/CategoryAccordion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop", dropdown: true },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Pages", href: "/pages" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex min-h-[65px] max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        {/* LOGO */}
        <Link
          to="/"
          className="shrink-0 text-2xl font-bold tracking-tight text-[#252b42]"
        >
          Bandage
        </Link>

        {/* MASAÜSTÜ MENÜ */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <div key={link.name} className="relative">
              {link.dropdown ? (
                <button
                  onClick={() => setShopOpen(!shopOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-[#252b42] transition hover:text-[#23a6f0]"
                >
                  {link.name}
                  <FaChevronDown size={10} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm font-semibold text-[#737373] transition hover:text-[#23a6f0]"
                >
                  {link.name}
                </Link>
              )}

              {/* SHOP DROPDOWN */}
              {link.dropdown && shopOpen && (
                <div >
                  <CategoryDropdown onNavigate={() => setShopOpen(!shopOpen)} />
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* SAĞ İKONLAR */}
        <div className="hidden shrink-0 items-center gap-5 text-[#23a6f0] md:flex">

          <UserInfo />


          <button aria-label="Ara" className="hover:text-[#168bd0]">
            <FaSearch size={16} />
          </button>

          <Link
            to="/cart"
            aria-label="Sepet"
            className="flex items-center gap-1 hover:text-[#168bd0]"
          >
            <FaShoppingCart size={16} />
            <span className="text-xs">1</span>
          </Link>

          <Link
            to="/favorites"
            aria-label="Favoriler"
            className="flex items-center gap-1 hover:text-[#168bd0]"
          >
            <FaRegHeart size={16} />
            <span className="text-xs">1</span>
          </Link>
        </div>

        {/* MOBİL BUTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          className="text-xl text-[#252b42] md:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBİL MENÜ */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col items-center gap-5">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setShopOpen(!shopOpen)}
                      className="flex items-center gap-2 text-lg font-medium text-[#252b42]"
                    >
                      Shop
                      <FaChevronDown size={11} />
                    </button>

                    {shopOpen && (
                      <div className="mt-3 flex flex-col items-center gap-3">
                        <CategoryAccordion onNavigate={() => setShopOpen(false)} />
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="text-lg font-medium text-[#252b42] transition hover:text-[#23a6f0]"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <UserInfo />

            <div className="flex items-center gap-7 text-[#23a6f0]">
              <Link to="/search" aria-label="Ara">
                <FaSearch size={18} />
              </Link>
              <Link
                to="/cart"
                aria-label="Sepet"
                className="flex items-center gap-1"
              >
                <FaShoppingCart size={18} />
                <span className="text-xs">1</span>
              </Link>
              <Link
                to="/favorites"
                aria-label="Favoriler"
                className="flex items-center gap-1"
              >
                <FaRegHeart size={18} />
                <span className="text-xs">1</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;