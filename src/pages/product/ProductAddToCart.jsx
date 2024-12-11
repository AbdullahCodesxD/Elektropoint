import Button from "../../components/Button";
import { CartSvg } from "../../components/Svgs";

export default function ProductAddToCart({ reverse, price, piece }) {
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

        <Button type="productBtn">
          {piece} {piece > 1 ? "Pieces" : "Piece"}
        </Button>

        <p className="font-semibold text-[24px]">${price}.00</p>
      </div>
    </div>
  );
}
