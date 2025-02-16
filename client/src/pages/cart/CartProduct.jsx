import { useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from "../../slices/cartSlices";

export default function CartProduct({
  children,
  src,
  price,
  quantity = 1,
  id,
}) {
  const [noOfProducts, setNoOfProducts] = useState(quantity);
  const dispatch = useDispatch();

  function incrementNoOfProducts() {
    setNoOfProducts((noOfProducts) => noOfProducts + 1);
    dispatch(
      incrementProduct({
        product: { _id: id },
        // quantity: quantity,
        price: price * quantity,
      })
    );
  }
  function decrementNoOfProducts() {
    if (noOfProducts === 0) return;
    setNoOfProducts(noOfProducts - 1);
    dispatch(
      decrementProduct({
        product: { _id: id },
        quantity: quantity,
        price: price * quantity,
      })
    );
  }
  return (
    <div
      className="flex overflow-hidden gap-2 relative items-center flex-wrap md:flex-nowrap justify-between px-2 py-3 pr-5  md:pr-0  bg-white rounded-xl md:flex-row md:justify-between md:overflow-hidden"
      style={{
        boxShadow: "0px 0px 5px rgba(0,0,0,.3)",
      }}
    >
      <img
        className="absolute z-[1]  top-0 left-0 w-full h-full object-cover md:static md:h-[50px] md:w-[50px] md:aspect-square inline md:object-contain"
        src={src}
        alt={children}
      />
      <div className="absolute md:hidden z-[1] top-0 left-0 w-full h-full bg-black/70"></div>
      <h4 className="relative font-semibold text-lg pb-1.5 mb-1.5 border-b border-white border-dotted w-full text-white z-[2] line-clamp-1 leading-[30px] md:hidden">
        {children}
      </h4>
      <div className="my-2 text-white md:text-dark relative z-[2] flex flex-row-reverse w-full items-center justify-start gap-4 md:gap-0  md:my-0 md:grid md:w-full md:grid-cols-3 md:pr-3">
        <h4 className="opacity-0 w-0 md:opacity-100 md:w-full md:max-w-[100px] line-clamp-1 leading-[30px]">
          {children}
        </h4>
        <div className="w-fit hidden md:flex items-center justify-center border border-white md:border-dark rounded-md overflow-hidden mx-auto">
          <Button handler={decrementNoOfProducts} type="cartBtns">
            -
          </Button>
          <p className="border-l border-r border-white md:border-dark px-5 py-1 w-fit">
            {noOfProducts}
          </p>
          <Button handler={incrementNoOfProducts} type="cartBtns">
            +
          </Button>
        </div>

        <p className="text-[22px] my-1 md:my-0 text-center font-semibold md:ml-auto">
          ${Number(noOfProducts * price).toFixed(2)}{" "}
        </p>
        <div className="w-fit flex md:hidden items-center justify-center border border-white md:border-dark rounded-md overflow-hidden md:mx-auto">
          <Button handler={decrementNoOfProducts} type="cartBtns">
            -
          </Button>
          <p className="border-l border-r border-white md:border-dark px-5 py-1 w-fit">
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
