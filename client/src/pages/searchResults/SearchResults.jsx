import { useEffect } from "react";
import { useParams } from "react-router";

import { useSelector } from "react-redux";
import { searchProducts } from "../../utils/searchApi";
import SearchResult from "./SearchResult";

export default function SearchResults() {
  const { search } = useParams();
  const results = useSelector((state) => state.search.results);
  const noOfResults = useSelector((state) => state.search.noOfResults);
  const isSearched = useSelector((state) => state.search.searched);
  useEffect(
    function () {
      searchProducts(search);
    },
    [search]
  );
  return (
    <section className="bg-white p-3">
      <div className="max-w-[1400px] min-h-[70vh] block mx-auto">
        <h4 className="text-lg">
          Results for{" "}
          <span className="uppercase italic text-main underline font-semibold">
            {search}
          </span>
        </h4>
        <h4 className="text-lg">
          No of products{" "}
          <span className="uppercase italic text-main underline font-semibold">
            {noOfResults}
          </span>
        </h4>

        <div className="mt-2 grid grid-cols-3 gap-5">
          {results?.map((result) => (
            <SearchResult key={result._id} data={result} />
          ))}
        </div>
      </div>
    </section>
  );
}
