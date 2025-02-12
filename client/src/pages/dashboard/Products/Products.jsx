import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import OrdersComponent from "../../../components/OrdersComponent";
import ProductsComponent from "../../../components/ProductsComponent";
import ProductsComponentHeader from "../../../components/ProductsComponentHeader";
import { getProducts } from "../../../utils/productsApi";
import ProductsHeader from "./ProductsHeader";

export default function Products() {
  const productsUnfiltered = useSelector((state) => state.products.products);

  const [filter, setFilter] = useState("all");
  const products =
    filter.toLowerCase() === "all"
      ? productsUnfiltered
      : productsUnfiltered.filter(
          (product) => product.status.toLowerCase() === filter.toLowerCase()
        );

  const [selected, setSelected] = useState([]);

  const noOfProducts = products.length;

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(
    function () {
      const isProductSelected = Array.from({ length: noOfProducts }).map(
        (_) => {
          return { selected: false };
        }
      );
      setSelected(isProductSelected);
    },
    [noOfProducts]
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
      <h3 className="font-semibold text-2xl">Orders</h3>

      <div className="mt-3 bg-white rounded-lg ">
        <ProductsHeader filter={filter} setFilter={setFilter} />

        {products.length === 0 && (
          <p className="p-3 bg-white text-center font-semibold border border-t">
            No product found{" "}
          </p>
        )}
        {products.length > 0 && (
          <div className="overflow-x-auto order">
            <ProductsComponentHeader
              selected={selected}
              selectAll={selectAll}
            />

            {products.map((data, i) => (
              <ProductsComponent
                isSelected={selected[i]?.selected}
                toggleSelected={() => toggleSelected(i)}
                key={data._id}
                product={data}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
