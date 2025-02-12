import { useEffect, useState } from "react";
import CollectionsComponent from "./CollectionsComponent";
import CollectionsComponentHeader from "./CollectionsComponentHeader";
import CollectionsHeader from "./CollectionsHeader";
import { getCollections } from "../../../../utils/collectionApi";
import { useSelector } from "react-redux";

export default function Collections() {
  const collections = useSelector((state) => state.collections);
  const [selected, setSelected] = useState([]);
  const noOfCollections = collections.length;

  useEffect(() => {
    getCollections();
  }, []);
  useEffect(
    function () {
      const isCollectionSelected = Array.from({ length: noOfCollections }).map(
        (_) => {
          return { selected: false };
        }
      );
      setSelected(isCollectionSelected);
    },
    [noOfCollections]
  );

  function selectAll(e) {
    if (e.target.checked) {
      setSelected(
        selected.map((_) => {
          return { selected: true };
        })
      );
    } else {
      setSelected(
        selected.map((_) => {
          return { selected: false };
        })
      );
    }
  }

  function toggleSelected(i) {
    setSelected((prevSelected) =>
      prevSelected.map((item, index) =>
        index === i ? { selected: !item.selected } : item
      )
    );
  }

  return (
    <div className="pb-[150px] md:pb-7 p-7 rounded-lg bg-[#EBEBEB]">
      <h3 className="font-semibold text-2xl">Collections</h3>

      <div className="bg-white mt-3 rounded-lg overflow-hidden">
        <CollectionsHeader />
        <div className="overflow-x-auto order">
          <CollectionsComponentHeader
            selected={selected}
            selectAll={selectAll}
          />

          {collections.map((collection, i) => (
            <CollectionsComponent
              isSelected={selected[i]?.selected}
              toggleSelected={() => toggleSelected(i)}
              key={collection._id}
              title={collection.title}
              noOfProducts={collection.noOfProducts}
              conditions={
                collection?.conditionVendors?.length > 0
                  ? `Product vendor is equal to ${collection?.conditionVendors?.join(
                      ", "
                    )}.`
                  : "No condition"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
