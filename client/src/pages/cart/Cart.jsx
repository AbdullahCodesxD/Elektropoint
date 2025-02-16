import { useSelector } from "react-redux";
import Button from "../../components/Button";
import CartProduct from "./CartProduct";

const API = import.meta.env.VITE_API;

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart, "--");
  return (
    <div className="p-3 max-w-[1500px] mx-auto block min-h-[70vh]">
      <h3 className="mt-3 pb-1.5 border-b-2 border-black text-[28px] font-semibold">
        Your Cart
      </h3>

      <div className="flex flex-col gap-3 my-5">
        {cart.noOfProducts === 0 && <p>Cart is empty</p>}
        {cart.noOfProducts > 0 &&
          cart.cart.map((product) => (
            <CartProduct
              key={product.product._id}
              price={`${product.product.price}`}
              quantity={product.quantity}
              id={product.product._id}
              src={`${API}/products/${product.product.media[0]}`}
            >
              {product.product.title}
            </CartProduct>
          ))}
      </div>

      {cart.noOfProducts > 0 && (
        <div className="flex items-center justify-end gap-4 flex-wrap pt-2 border-t border-dark">
          <p className="font-semibold text-lg ">
            Total : ${Number(cart.price).toFixed(2)}
          </p>
          <Button
            to="/checkout"
            extraClasses="block max-w-[150px]"
            type="checkout"
          >
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
}
