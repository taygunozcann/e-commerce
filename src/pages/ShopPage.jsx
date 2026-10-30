import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductList from "../components/ShopComponents/ProductList";
import ShopFilters from "../components/ShopComponents/ShopFilters";
import { fetchProducts, setOffset } from "../store/actions/productActions";
import Categories from '../components/ShopComponents/Categories';


const ShopPage = () => {
  const dispatch = useDispatch();
    // /shop/:gender/:categoryName/:categoryId -> categoryId ; plain /shop -> undefined
    const { categoryId } = useParams();
    const { filter, sort, limit, offset } = useSelector((state) => state.product);
    const previousKey = useRef(null);
  
    useEffect(() => {
      // Category / filter / sort changed -> go back to page 1 first (offset 0).
      // Setting the offset re-runs this effect, so only ONE request is sent.
      const key = `${categoryId}|${filter}|${sort}`;
      const parametersChanged = previousKey.current !== null && previousKey.current !== key;
      previousKey.current = key;
      if (parametersChanged && offset !== 0) {
        dispatch(setOffset(0));
        return;
      }
  
      // products?category=2&filter=siyah&sort=price:desc&limit=25&offset=25
      dispatch(fetchProducts({ category: categoryId, filter, sort, limit, offset }));
    }, [dispatch, categoryId, filter, sort, limit, offset]);
  
    // leaving the shop: the next visit starts on page 1
    useEffect(() => () => dispatch(setOffset(0)), [dispatch]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen font-sans">
      <Categories />
      <ShopFilters />
      <ProductList />
    </div>
  );
};

export default ShopPage;