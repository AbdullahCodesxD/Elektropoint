import { useState } from "react";
import Button from "../../components/Button";

export default function CartProduct({ children, src, price }) {
  const [noOfProducts, setNoOfProducts] = useState(1);

  function incrementNoOfProducts() {
    setNoOfProducts(noOfProducts + 1);
  }
  function decrementNoOfProducts() {
    if (noOfProducts === 1) return;
    setNoOfProducts(noOfProducts - 1);
  }
  return (
    <div
      className="flex gap-2 items-center justify-between pr-5 md:pr-0  bg-white rounded-xl md:justify-between md:overflow-hidden"
      style={{
        boxShadow: "0px 0px 5px rgba(0,0,0,.3)",
      }}
    >
      <img className="h-[150px] md:h-[70px]" src={src} alt={children} />

      <div className="my-2 md:my-0 md:grid md:w-full md:grid-cols-3 md:pr-3">
        <h4>{children}</h4>
        <div className="w-fit hidden md:flex items-center justify-center border border-dark rounded-md overflow-hidden mx-auto">
          <Button handler={decrementNoOfProducts} type="cartBtns">
            -
          </Button>
          <p className="border-l border-r border-dark px-5 py-1 w-fit">
            {noOfProducts}
          </p>
          <Button handler={incrementNoOfProducts} type="cartBtns">
            +
          </Button>
        </div>

        <p className="text-[22px] my-1 md:my-0 text-center font-semibold md:ml-auto">
          ${noOfProducts * Number(price)}
        </p>
        <div className="w-fit flex md:hidden items-center justify-center border border-dark rounded-md overflow-hidden mx-auto">
          <Button handler={decrementNoOfProducts} type="cartBtns">
            -
          </Button>
          <p className="border-l border-r border-dark px-5 py-1 w-fit">
            {noOfProducts}
          </p>
          <Button handler={incrementNoOfProducts} type="cartBtns">
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
