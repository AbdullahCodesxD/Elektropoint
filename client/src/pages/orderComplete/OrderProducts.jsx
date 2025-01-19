export default function OrderProducts() {
  return (
    <div className="m-3 py-4 px-7 bg-[#eaeaea] rounded-md">
      <div className="grid grid-cols-3 gap-5 my-3 pb-5 border-b border-black">
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
        <OrderProduct src="/product.png" noOfProducts="2" />
      </div>

      <p className="flex items-center justify-between mt-1">
        <span className="text-lg">Subtotal</span>
        <span className="text-lg">$200.00</span>
      </p>
      <p className="flex items-center justify-between mt-1">
        <span className="text-lg">Shipping</span>
        <span className="text-lg">$200.00</span>
      </p>
      <p className="flex items-center justify-between mt-1">
        <span className="text-lg">Taxes</span>
        <span className="text-lg">$200.00</span>
      </p>

      <p className="flex items-center justify-between pt-3 mt-3 border-t border-black">
        <span className="text-2xl font-bold">Total</span>
        <span className="text-2xl font-bold">$223.00</span>
      </p>
    </div>
  );
}

function OrderProduct({ src, noOfProducts }) {
  return (
    <div className="relative h-[100px] md:bg-white">
      <img
        src={src}
        alt="Image Of Product"
        className="w-full h-full object-cover object-center md:object-contain"
      />

      <p className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[25px] aspect-square rounded-full  bg-[#c9c9c9] flex items-center justify-center">
        {noOfProducts}
      </p>
    </div>
  );
}
