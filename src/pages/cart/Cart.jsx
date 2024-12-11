import Button from "../../components/Button";
import CartProduct from "./CartProduct";

export default function Cart() {
  return (
    <div className="p-3">
      <h3 className="mt-3 pb-1.5 border-b-2 border-black text-[28px] font-semibold">
        Your Cart
      </h3>

      <div className="flex flex-col gap-3 my-5">
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 1
        </CartProduct>
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 2
        </CartProduct>
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 1
        </CartProduct>
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 1
        </CartProduct>
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 1
        </CartProduct>
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 1
        </CartProduct>
        <CartProduct price="21.25" src="/product.png">
          Lighting arrester type 1
        </CartProduct>
      </div>

      <Button to="/checkout" extraClasses="min-w-full block" type="checkout">
        Checkout
      </Button>
    </div>
  );
}
