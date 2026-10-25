import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, department, originalPrice, salePrice, colors }) => {
  return (
    <Link to={`/productdetail/`} >
      <div className="flex flex-col group cursor-pointer bg-white">
        {/* Ürün Görsel Alanı */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Ürün Bilgi Alanı */}
        <div className="flex flex-col items-center text-center pt-6 pb-4 px-2">
          <h4 className="text-base font-bold text-slate-900 tracking-tight">
            {title}
          </h4>
          <p className="text-sm text-slate-500 font-semibold mt-1">
            {department}
          </p>
          
          {/* Fiyat Alanı */}
          <div className="flex items-center gap-2 mt-2.5 font-bold">
            <span className="text-slate-400 line-through text-sm">
              ${originalPrice}
            </span>
            <span className="text-emerald-700 text-sm">
              ${salePrice}
            </span>
          </div>

          {/* Renk Seçenekleri Çemberleri */}
          <div className="flex items-center gap-1.5 mt-3">
            {colors.map((color, index) => (
              <span
                key={index}
                className="w-3 h-3 rounded-full border border-black/5"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;