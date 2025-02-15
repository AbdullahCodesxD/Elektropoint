import { useState } from "react";
import Button from "../../components/Button";
import { CartSvg } from "../../components/Svgs";

export default function ProductAddToCart({ reverse, price, max = 100 }) {
  const [piece, setPiece] = useState(1);
  return (
    <div className="p-3">
      <div
        className={` flex items-center ${
          reverse && "flex-row-reverse gap-3 "
        } flex-wrap gap-2  `}
      >
        <Button type="productBtn">
          <CartSvg height={20} color="#222" /> Add To Cart
        </Button>

        <Button extraClasses="px-2 py-1.5 w-[140px] py-0 border border-dark rounded-md flex items-center justify-between cursor-pointer">
          <p>Pieces : </p>
          <input
            className="  rounded-md outline-none w-[60px] text-center"
            type="number"
            value={piece === 0 ? "" : piece}
            min="1"
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                setPiece("");
              } else {
                const num = Math.max(0, parseInt(value) || 0);
                setPiece(num > max ? max : num);
              }
            }}
            onBlur={() => {
              if (piece === "" || piece < 1) setPiece(1);
            }}
          />
        </Button>

        <p className="font-semibold text-[24px]">Price : ${price}.00</p>
      </div>
    </div>
  );
}
