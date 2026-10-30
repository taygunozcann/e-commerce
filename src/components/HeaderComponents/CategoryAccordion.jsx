import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryPath, getGender } from "../../utils/categoryLinks";

// Mobile version of the "Shop" drop-down: an accordion for the mobile menu.
// Tap "Shop" to expand; Kadın and Erkek sections are stacked, links are touch-friendly.
// `onNavigate` lets the parent mobile menu close itself after a link is tapped.
export default function CategoryAccordion({ onNavigate }) {
  const categories = useSelector((state) => state.product.categories);

  const groups = useMemo(() => ([
    { title: "Kadın", list: categories.filter((c) => getGender(c) === "kadin") },
    { title: "Erkek", list: categories.filter((c) => getGender(c) === "erkek") },
  ]), [categories]);

  return (
    <div className="w-full font-['Montserrat',sans-serif]">


      {categories.length > 0 && (
        <div id="mobile-shop-panel" className="flex flex-col items-center gap-6 py-4">
          {groups.map(({ title, list }) => (
            <div key={title} className="w-full text-center">
              <h3 className="mb-2 text-base font-bold text-[#252B42]">{title}</h3>
              <ul className="flex flex-col items-center">
                {list.map((cat) => (
                  <li key={cat.id} className="w-full">
                    <Link to={getCategoryPath(cat)} onClick={onNavigate}
                      className="flex items-center justify-center min-h-11 text-base font-bold text-[#737373] active:text-[#23A6F0]">
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
