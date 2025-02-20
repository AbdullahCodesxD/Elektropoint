import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import DiscountComponent from "./DiscountComponent";
import DiscountComponentHeader from "./DiscountComponentHeader";
import DiscountHeader from "./DiscountHeader";
import { useSelector } from "react-redux";
import { deleteDiscount, getDiscount } from "../../../utils/discountApi";

export default function Discount() {
  const discounts = useSelector((state) => state.discounts.discounts);
  const [selected, setSelected] = useState([]);
  const isAnySelected = selected.some((item) => item.selected);
  const discountSelected = selected
    .map((discount, i) => discount.selected && discounts[i])
    .filter((discount) => discount._id);

  function handleDelete(e) {
    e.preventDefault();
    const answer = window.confirm("Are you sure you want to delete?");
    if (answer) {
      // deleteProducts(productSelected);
      deleteDiscount(discountSelected);
      console.log(discountSelected, answer);
    }
  }
  function toggleSelected(i) {
    setSelected((prevSelected) =>
      prevSelected.map((item, index) =>
        index === i ? { selected: !item.selected } : item
      )
    );
  }
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
  useEffect(
    function () {
      const isDiscountSelected = Array.from({ length: discounts.length }).map(
        (_) => {
          return { selected: false };
        }
      );
      setSelected(isDiscountSelected);
    },
    [discounts]
  );
  useEffect(function () {
    getDiscount();
  }, []);

  return (
    <div className="p-5 rounded-md bg-[#e8e8e8] min-h-[70vh] md:min-h-[initial]">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h3 className="text-xl font-medium">Discounts</h3>
        <Button
          to="new"
          extraClasses="bg-main text-dark px-5 py-1 text-[15px] rounded-md"
        >
          Create discount
        </Button>
      </div>
      {discounts.length === 0 && (
        <p className="p-5 bg-white font-semibold text-center mt-3">
          No discount yet
        </p>
      )}
      {discounts.length > 0 && (
        <div className="rounded-lg overflow-hidden mt-3.5">
          <DiscountHeader
            handler={handleDelete}
            isAnySelected={isAnySelected}
          />
          <div className="overflow-x-auto order">
            <DiscountComponentHeader
              selected={selected}
              selectAll={selectAll}
            />

            {discounts.map((discount, i) => {
              return (
                <DiscountComponent
                  isSelected={selected[i]?.selected}
                  toggleSelected={() => toggleSelected(i)}
                  key={discount._id}
                  discount={discount}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
