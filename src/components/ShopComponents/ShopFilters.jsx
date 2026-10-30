import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSort } from "../../store/actions/productActions";

const SORT_OPTIONS = [
  { value: "", label: "Sort by" },
  { value: "price:asc", label: "Price: low to high" },
  { value: "price:desc", label: "Price: high to low" },
  { value: "rating:asc", label: "Rating: low to high" },
  { value: "rating:desc", label: "Rating: high to low" },
];

const fieldCls = "h-12 px-4 text-sm text-[#252B42] bg-white border border-[#E6E6E6] rounded-md outline-none focus:border-[#23A6F0]";

// Sort select + filter input + Filter button.
// Nothing is applied while typing/selecting: the Filter button (or Enter) saves both values to the store.
export default function ShopFilters() {
  const dispatch = useDispatch();
  const storedSort = useSelector((state) => state.product.sort);
  const storedFilter = useSelector((state) => state.product.filter);
  const { productList, total, offset, limit } = useSelector((state) => state.product);
  const [sort, setSortDraft] = useState(storedSort);
  const [filter, setFilterDraft] = useState(storedFilter);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setSort(sort));
    dispatch(setFilter(filter.trim()));
  };

  return (
    
    <div className="bg-white border-y border-slate-100 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="text-sm font-bold text-[#737373]">
                Showing {offset + 1} - {Math.min(offset + limit, total)} of {total} results
            </div>

            {/* Görünüm İkonları (Grid/List) */}
            <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#737373]">Views:</span>
                <button className="p-3 border border-slate-200 rounded bg-white text-slate-700 hover:border-slate-400">
                🎛️
                </button>
                <button className="p-3 border border-slate-200 rounded bg-white text-slate-700 hover:border-slate-400">
                ☰
                </button>
            </div>
            <form onSubmit={onSubmit} className="flex items-center gap-4 w-full md:w-auto justify-center">
                <input type="text" value={filter} onChange={(e) => setFilterDraft(e.target.value)} placeholder="Search products..." aria-label="Filter products" className={`${fieldCls} sm:w-64`} />
                <select value={sort} onChange={(e) => setSortDraft(e.target.value)} aria-label="Sort products" className={fieldCls}>
                    {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
                <button type="submit" className="h-12 px-8 text-sm font-bold text-white bg-[#23A6F0] rounded-md hover:bg-[#1d93d6]">Filter</button>
            </form>
            
        </div>
    </div>
    
  );
}
