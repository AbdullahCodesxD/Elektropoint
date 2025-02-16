import { useState } from "react";
import Button from "../../components/Button";
import { CartSvg } from "../../components/Svgs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementProduct } from "../../slices/cartSlices";
import { useNavigate } from "react-router";

export default function ProductAddToCart({ padding, product, reverse, price }) {
  const [piece, setPiece] = useState(1);
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart.cart);
  const box = useSelector((state) => state.customBox.box);
  function handleSettingsProduct(e) {
    e.preventDefault();

    const arrOfProducts = [product, ...box.filter((p) => p._id)];
    arrOfProducts.forEach((product) => {
      const currentProductIndex = cartProducts.findIndex(
        (p) => p.product._id === product._id
      );
      if (currentProductIndex !== -1) {
        dispatch(
          incrementProduct({
            product: { _id: product._id },
            quantity: piece,
            price: product.price * piece,
          })
        );
      } else {
        dispatch(addToCart({ product, quantity: piece }));
      }
    });
    alert("Product added to cart successfully");
  }

  return (
    <div className={`${!padding ? "" : "p-3"}`}>
      <div
        className={` flex items-center ${
          reverse && "flex-row-reverse gap-3 "
        } flex-wrap gap-2  `}
      >
        <Button handler={handleSettingsProduct} type="productBtn">
          <CartSvg height={20} color="#222" /> Add To Cart
        </Button>

        {!product.box && (
          <div className="flex items-center gap-1 justify-center">
            <Button
              handler={(e) => {
                e.preventDefault();

                if (piece === 1) return;
                setPiece(piece - 1);
              }}
              extraClasses="p-1 bg-dark/10 cursor-pointer text-[14px] rounded-full h-[25px] w-[25px] flex items-center justify-center"
            >
              -
            </Button>
            <p className="text-lg min-w-[25px] text-center">{piece}</p>
            <Button
              handler={(e) => {
                e.preventDefault();

                setPiece(piece + 1);
              }}
              extraClasses="p-1 bg-dark/10 cursor-pointer text-[14px] rounded-full h-[25px] w-[25px] flex items-center justify-center"
            >
              +
            </Button>
          </div>
        )}

        {!product.box && product.price && (
          <p className="font-semibold text-[24px]">
            Total : ${Number(product.price * piece).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
