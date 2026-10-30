import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../store/actions/productActions";
import { useSelector } from "react-redux";
import ProductCard from "../ShopComponents/ProductCard";
import Spinner from "../ShopComponents/Spinner";
import { FETCH_STATES } from "../../store/actions/productActions";
import { useMemo } from "react";

const Bestsellers = () => {
  const dispatch = useDispatch();
  // present on /shop/:gender/:categoryName/:categoryId, undefined on plain /shop
 

  useEffect(() => {
    dispatch(fetchProducts({limit:8, sort: "sell_count:desc"}));
  }, [dispatch]);

  const { productList, fetchState } = useSelector((state) => state.product);
  
  console.log("Bestsellers productList:", productList);

  
    if (fetchState === FETCH_STATES.NOT_FETCHED || fetchState === FETCH_STATES.FETCHING) {
      return <Spinner label="Loading products..." />;
    }
    if (fetchState === FETCH_STATES.FAILED) {
      return <p role="alert" className="py-20 text-center text-[#E74040]">Products could not be loaded. Please try again.</p>;
    }
    if (productList.length === 0) {
      return <p className="py-20 text-center text-[#737373]">No products found.</p>;
    }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">
      
      {/* Üst Başlık Alanı */}
      <div className="text-center mb-12 md:mb-16 px-2">
        <h3 className="text-sm md:text-base font-semibold text-slate-400 tracking-wider uppercase">
          Featured Products
        </h3>
        <h2 className="text-xl md:text-2xl font-bold tracking-wider text-slate-900 uppercase mt-2">
          BESTSELLER PRODUCTS
        </h2>
        <p className="text-xs md:text-sm text-slate-400 mt-2 font-medium max-w-xs mx-auto md:max-w-none">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Ürünler Grid Listesi */}
      {/* Mobilde 1 veya isteğe göre 2 sütun (sm:grid-cols-2), masaüstünde 4 sütun */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product= {product}
          />
        ))}
      </div>

    </section>
  );
};

export default Bestsellers;