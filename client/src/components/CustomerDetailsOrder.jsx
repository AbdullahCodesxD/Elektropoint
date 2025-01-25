import Button from "./Button";
const API = import.meta.env.VITE_API;

export default function CustomerDetailsOrder({ order }) {
  console.log(order, "gg");
  return (
    <div className="bg-white p-3 rounded-md">
      <h3 className="font-semibold text-lg">Last order place</h3>

      <div className="mt-5 p-3 border-2 border-dark/10 rounded-xl">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-lg font-medium">#{order.orderNo}</p>

          <p className="bg-white capitalize border border-dark/10 text-[14px] px-3 font-medium py-1 rounded-md flex items-center gap-1">
            <span className="block h-[7px] aspect-square rounded-full bg-main"></span>{" "}
            {order.paymentStatus}
          </p>
          <p className="text-[14px] capitalize px-3 font-medium py-1 rounded-md bg-main ">
            {order.fullFilmentStatus}
          </p>
        </div>

        {/* ///////////// */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-2 p-2 border-2 rounded-md border-dark/10">
          {order.product.map((product) => {
            return (
              <div
                key={product._id}
                className="flex items-center justify-center gap-3"
              >
                <img
                  src={`${API}/products/${product.media[0]}`}
                  className="h-[70px] aspect-square object-contain rounded-lg border-2 border-dark/10"
                />
                <div>
                  <h4 className="text-[15px] capitalize line-clamp-1 font-semibold text-dark/70">
                    {product.title}
                  </h4>
                  <p className="text-[15px] capitalize line-clamp-2 text-dark/70 max-w-[250px] leading-[1.1]">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
          <span>1x</span>
          <span>$0.00</span>
        </div>
      </div>
    </div>
  );
}
