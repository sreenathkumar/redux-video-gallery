import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

export default function Home({ setSearchInput }) {
  return (
    <>
      <Tags setSearchInput={setSearchInput} />
      <VideoGrid />
      <Pagination />
    </>
  );
}
