import { useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../utils/searchApi";
import SearchResult from "./SearchResult";
import Loader from "../../components/Loader";
import { setIsSearched } from "../../slices/searchSlice";

export default function SearchResults() {
  const { search } = useParams();
  const results = useSelector((state) => state.search.results);
  const noOfResults = useSelector((state) => state.search.noOfResults);
  const isFetched = useSelector((state) => state.search.isSearched);
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(setIsSearched(false));

      searchProducts(search);
    },
    [search]
  );

  if (!isFetched) return <Loader height={70} width={70} />;
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

        <div className="mt-2 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results?.map((result) => (
            <SearchResult key={result._id} data={result} />
          ))}
        </div>
      </div>
    </section>
  );
}
