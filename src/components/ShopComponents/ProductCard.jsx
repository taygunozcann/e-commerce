import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const image = product.images?.[0]?.url;
  return (
    <Link to={`/productdetail/`} >
      <div className="flex flex-col group cursor-pointer bg-white">
        {/* Ürün Görsel Alanı */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Ürün Bilgi Alanı */}
        <div className="flex flex-col items-center text-center pt-6 pb-4 px-2">
          <h4 className="text-base font-bold text-slate-900 tracking-tight">
            {product.name}
          </h4>
          <p className="text-sm text-slate-500 font-semibold mt-1">
            {product.description}
          </p>
          
          {/* Fiyat Alanı */}
          <div className="flex items-center gap-2 mt-2.5 font-bold">
            <p className="text-base font-bold text-[#23A6F0]">${Number(product.price).toFixed(2)}</p>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;