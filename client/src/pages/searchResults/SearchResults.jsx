import { useEffect } from "react";
import { useParams } from "react-router";

import { useSelector } from "react-redux";
import { searchProducts } from "../../utils/searchApi";

export default function SearchResults() {
  const { search } = useParams();
  const results = useSelector((state) => state.search.results);
  const noOfResults = useSelector((state) => state.search.noOfResults);
  console.log(results, noOfResults);

  useEffect(
    function () {
      searchProducts(search);
    },
    [search]
  );
  return <div>SearchResults {search}</div>;
}
