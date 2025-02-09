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

export default function Collection() {
  // Collection Name
  const { collection: collectionParam } = useParams();
  const clientCollection = useSelector((state) => state.clientCollection);
  const collection = clientCollection?.currentCollection || {};
  const products = clientCollection?.currentCollectionProducts || [];
  const noOfProducts = clientCollection?.noOfProducts || 0;

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

  return (
    <div>
      <ProductsHeader slug={collection.slug}>{collection.title}</ProductsHeader>
      <div
        className="md:grid gap-5"
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
