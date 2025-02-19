import Button from "./Button";

export default function CheckoutStatusComponent({
  currentPage = "checkout",
  disable,
}) {
  return (
    <div className="p-3 my-5 md:flex items-center md:max-w-[900px] md:mx-auto">
      <div className="md:w-full">
        <Button to="/cart" type="checkoutStatus">
          <span className="h-[55px] aspect-square rounded-full flex items-center justify-center bg-main text-white text-[26px]">
            1
          </span>
          Your Cart
        </Button>
      </div>

      <div className="py-6 relative md:py-0 md:w-full">
        <div className="absolute w-[1px] h-[90%] bg-dark top-1/2 -translate-y-1/2 left-[27.5px] -z-[1]"></div>
        <Button to="/checkout" type="checkoutStatus">
          <span className="outline outline-4  h-[55px] aspect-square rounded-full flex items-center justify-center bg-main text-white text-[26px]">
            2
          </span>
          Checkout
        </Button>
      </div>

      <div className="md:w-full">
        {disable ? (
          <Button type="checkoutStatus" extraClasses="cursor-not-allowed">
            <span
              className={`h-[55px] aspect-square rounded-full flex items-center justify-center ${
                currentPage === "checkout"
                  ? "bg-[#cBcBcB] text-[#a5a5a5]"
                  : "bg-main text-white"
              } text-[26px]`}
            >
              3
            </span>
            Order Complete
          </Button>
        ) : (
          <Button
            to={`${currentPage === "checkout" ? "#" : "/order-complete"}`}
            type="checkoutStatus"
          >
            <span
              className={`h-[55px] aspect-square rounded-full flex items-center justify-center ${
                currentPage === "checkout"
                  ? "bg-[#cBcBcB] text-[#a5a5a5]"
                  : "bg-main text-white"
              } text-[26px]`}
            >
              3
            </span>
            Order Complete
          </Button>
        )}
      </div>
    </div>
  );
}
