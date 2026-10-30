import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryPath } from "../../utils/categoryLinks";

function Categories() {
    // Üst Kategori Öne Çıkanları Data Dizisi
   const categories = useSelector((state) => state.product.categories);

   const top5 = useMemo(
    () => [...categories].sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 5),
    [categories]
  );

  if (top5.length === 0) return null;
    
  return (
    <div>
        {/* 1. Header / Breadcrumb Kısmı */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white sm:bg-transparent">
        <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
        <div className="flex items-center gap-2 text-sm font-bold">
          <span className="text-[#252B42] cursor-pointer">Home</span>
          <span className="text-[#BDBDBD]">➔</span>
          <span className="text-[#BDBDBD]">Shop</span>
        </div>
      </div>

      {/* 2. Üst Kategori Kartları Bloğu */}
      {/* Mobilde 1, Tablette 3, Masaüstünde 5 sütun yan yana listelenir */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {top5.map((cat) => (
            <Link key={cat.id} to={getCategoryPath(cat)} className="relative h-[220px] overflow-hidden group cursor-pointer shadow-sm">
              <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-white">
                <span className="font-bold tracking-wider text-base">{cat.title}</span>
                <span className="text-xs mt-1 font-medium">{cat.items}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
