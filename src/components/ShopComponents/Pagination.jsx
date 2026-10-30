import * as ReactPaginateModule from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { setOffset } from "../../store/actions/productActions";

const ReactPaginate =
  ReactPaginateModule.default?.default ??
  ReactPaginateModule.default ??
  ReactPaginateModule;

const box = "flex items-center justify-center h-10 min-w-10 px-3 text-sm font-bold border border-[#E6E6E6]";

// Page buttons built on limit / offset:
//   page 1 -> offset 0, page 2 -> offset 25, page 3 -> offset 50 (limit 25)
export default function Pagination() {
  const dispatch = useDispatch();
  const { total, limit, offset } = useSelector((state) => state.product);

  const pageCount = Math.ceil(total / limit);
  if (pageCount <= 1) return null;

  const currentPage = Math.min(Math.floor(offset / limit), pageCount - 1);

  const onPageChange = ({ selected }) => {
    dispatch(setOffset(selected * limit));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

        <ReactPaginate
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={onPageChange}
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        containerClassName="flex flex-wrap items-center justify-center gap-0 px-4 py-8 font-['Montserrat',sans-serif] list-none"
        pageLinkClassName={`${box} text-[#23A6F0] bg-white hover:bg-[#F3F3F3] cursor-pointer`}
        previousLinkClassName={`${box} text-[#23A6F0] bg-[#F3F3F3] rounded-l-md cursor-pointer`}
        nextLinkClassName={`${box} text-[#23A6F0] bg-white rounded-r-md cursor-pointer`}
        breakLinkClassName={`${box} text-[#737373] bg-white`}
        activeLinkClassName="!bg-[#23A6F0] !text-white"
        disabledLinkClassName="!text-[#BDBDBD] !cursor-not-allowed"
        />
  );
}
