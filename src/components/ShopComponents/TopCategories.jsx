import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryPath } from "../../utils/categoryLinks";

// Top 5 categories by rating (highest first), shown with their images.
export default function TopCategories() {
  const categories = useSelector((state) => state.product.categories);

  const top5 = useMemo(
    () => [...categories].sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 5),
    [categories]
  );

  if (top5.length === 0) return null;

  return (
    <section className="px-4 py-12 mx-auto max-w-6xl">
      <h2 className="mb-8 text-2xl font-bold text-center text-[#252B42]">Top Categories</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {top5.map((cat) => (
          <Link key={cat.id} to={getCategoryPath(cat)} className="relative block overflow-hidden rounded-md group aspect-[3/4] bg-[#FAFAFA]">
            <img src={cat.img} alt={cat.title} loading="lazy" className="object-cover w-full h-full transition-transform group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 p-3 text-center bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-base font-bold text-white">{cat.title}</h3>
              <p className="text-xs text-white/80">★ {Number(cat.rating).toFixed(1)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
