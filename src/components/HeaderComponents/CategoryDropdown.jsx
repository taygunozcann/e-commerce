import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryPath, getGender } from "../../utils/categoryLinks";

// Header drop-down: categories grouped as "Kadın" and "Erkek" columns.
export default function CategoryDropdown({ onNavigate }) {
  const categories = useSelector((state) => state.product.categories);

  const groups = useMemo(() => ({
    Kadın: categories.filter((c) => getGender(c) === "kadin"),
    Erkek: categories.filter((c) => getGender(c) === "erkek"),
  }), [categories]);

  return (
    <div>
        {categories.length > 0 && (
        <div className="absolute left-0 z-50 flex gap-10 p-6 bg-white border border-[#E6E6E6] rounded-md shadow-lg top-full min-w-[320px]">
          {Object.entries(groups).map(([title, list]) => (
            <div key={title}>
              <h3 className="mb-3 text-base font-bold text-[#252B42]">{title}</h3>
              <ul className="flex flex-col gap-2">
                {list.map((cat) => (
                  <li key={cat.id}>
                    <Link to={getCategoryPath(cat)} onClick={onNavigate}
                      className="text-sm font-bold text-[#737373] hover:text-[#23A6F0]">
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
