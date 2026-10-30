
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import { FETCH_STATES } from "../../store/actions/productActions";
import Pagination from "./Pagination.jsx";

function ProductList() {

   const { productList, fetchState, total } = useSelector((state) => state.product);
   
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
    <div>
      {/* Ana Ürün Listesi Grid Alanı */}
      {/* Mobilde 1, Tablet/Küçük Ekranlarda 2, Masaüstünde tam 4 sütun */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {productList.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>

      {/* Sayfalama (Pagination) Alanı */}
      <div className="max-w-7xl mx-auto pb-20 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default ProductList;
