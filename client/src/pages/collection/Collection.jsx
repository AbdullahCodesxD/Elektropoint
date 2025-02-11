import { useParams } from "react-router";
import CollectionName from "./CollectionName";
import CollectionDesktopTypes from "./CollectionDesktopTypes";
import CollectionFilter from "./CollectionFilter";
import { useEffect, useState } from "react";
import CollectionSorting from "./CollectionSorting";
import CollectionItems from "./CollectionItems";
import ProductsHeader from "../../components/ProductsHeader";
import {
  getCollection,
  getCollectionProducts,
} from "../../utils/clientCollectionApi";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

export default function Collection() {
  // Collection Name
  const { collection: collectionParam } = useParams();
  const clientCollection = useSelector((state) => state.clientCollection);
  const collection = clientCollection?.currentCollection || {};
  const products = clientCollection?.currentCollectionProducts || [];
  const noOfProducts = clientCollection?.noOfProducts || 0;
  const isFetched = clientCollection?.isFetched;

  // For Filtering
  const [filter, setFilter] = useState("");

  // For Sorting
  const [sortBy, setSortBy] = useState("");
  const [onlyStockItems, setOnlyStockItems] = useState(false);

  useEffect(
    function () {
      getCollection(collectionParam);
      getCollectionProducts(collectionParam);
    },
    [collectionParam]
  );

  if (isFetched && !collection._id) window.location = "/";
  if (!isFetched) return <Loader height={90} width={90} />;
  return (
    <div>
      <ProductsHeader slug={collection.slug}>{collection.title}</ProductsHeader>
      <div
        className="md:grid gap-5 min-h-[70vh]"
        style={{
          gridTemplateColumns: "300px 1fr",
        }}
      >
        <CollectionDesktopTypes />
        <div className="md:bg-white">
          <CollectionName>{collection.title}</CollectionName>
          {/* <CollectionFilter filter={filter} setFilter={setFilter} /> */}
          <CollectionSorting
            // sortBy={sortBy}
            // setSortBy={setSortBy}
            //
            // onlyStockItems={onlyStockItems}
            // setOnlyStockItems={setOnlyStockItems}
            //
            noOfItems={noOfProducts}
          />
          <CollectionItems products={products} />
        </div>
      </div>
    </div>
  );
}
