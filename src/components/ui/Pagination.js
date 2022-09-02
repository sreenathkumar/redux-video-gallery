import PaginationItem from "./PaginationItem";
import { useSelector } from "react-redux";

export default function Pagination() {
  const { itemsPerPage, totalVideos } = useSelector((state) => {
    return state.pagination;
  });
  const NumberOfPages = Math.ceil(totalVideos / itemsPerPage);
  let pageArray = [];
  for (let i = 1; i <= NumberOfPages; i++) {
    pageArray.push(i);
  }
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageArray.map((number) => {
          return <PaginationItem key={number} number={number} />;
        })}
      </div>
    </section>
  );
}
