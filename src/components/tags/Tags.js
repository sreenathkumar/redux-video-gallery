import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../features/filter/filterSlice";
import { resetPage } from "../../features/pagination/paginationSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex  border-b overflow-y-auto justify-between">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch(reset());
            dispatch(resetPage());
          }}
        >
          Reset
        </button>
      </div>
    </section>
  ) : null;
}
