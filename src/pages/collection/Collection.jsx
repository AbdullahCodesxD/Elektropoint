import { useParams } from "react-router";
import CollectionName from "./CollectionName";
import CollectionDesktopTypes from "./CollectionDesktopTypes";
import CollectionFilter from "./CollectionFilter";
import { useState } from "react";
import CollectionSorting from "./CollectionSorting";
import CollectionItems from "./CollectionItems";
import ProductsHeader from "../../components/ProductsHeader";

export default function Collection() {
  // Collection Name
  const { collection } = useParams();

  // For Filtering
  const [filter, setFilter] = useState("");

  // For Sorting
  const [sortBy, setSortBy] = useState("");
  const [onlyStockItems, setOnlyStockItems] = useState(false);

  return (
    <div>
      <ProductsHeader>{collection}</ProductsHeader>
      <div
        className="md:grid gap-5"
        style={{
          gridTemplateColumns: "300px 1fr",
        }}
      >
        <CollectionDesktopTypes />
        <div className="md:bg-white">
          <CollectionName>{collection}</CollectionName>
          <CollectionFilter filter={filter} setFilter={setFilter} />
          <CollectionSorting
            sortBy={sortBy}
            setSortBy={setSortBy}
            //
            onlyStockItems={onlyStockItems}
            setOnlyStockItems={setOnlyStockItems}
            //
            noOfItems="59"
          />
          <CollectionItems />
        </div>
      </div>
    </div>
  );
}
