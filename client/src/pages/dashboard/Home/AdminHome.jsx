import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminDashboardHome } from "../../../utils/adminDashboardHomeApi";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API;
export default function AdminHome() {
  const adminData = useSelector((state) => state.adminHome);
  const products = adminData.products;
  const orders = adminData.orders;
  useEffect(function () {
    getAdminDashboardHome();
  }, []);
  return (
    <div className="pb-[150px] lg:pb-7 md:pb-7 p-7 rounded-lg bg-[#EBEBEB]">
      <h3 className="font-semibold pb-1 text-2xl border-b border-dark/20 border-dotted mb-3">
        Home
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-semibold">Latest Products</h4>
          {products.length === 0 && <p>No products found</p>}
          {products.map((product) => (
            <Link
              to={`/dashboard/products/product/${product.title}`}
              key={product._id}
              className="my-1 border rounded-md flex items-center gap-2 transition-all hover:opacity-50 cursor-pointer"
            >
              <img
                className="h-[60px] aspect-square object-cover object-bottom border-r-2 border-main"
                src={`${API}/products/${product.media[0]}`}
              />
              <h4 className="text-[15px] font-medium line-clamp-2">
                {product.title}
              </h4>
            </Link>
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h4 className="font-semibold">Latest Orders</h4>
          {orders.length === 0 && <p>No Orders found</p>}

          {orders.map((order) => (
            <Link
              to={`/dashboard/orders/order/${order._id}`}
              key={order._id}
              className="my-1 p-2 border rounded-md flex items-center justify-between flex-wrap gap-2 transition-all hover:opacity-50 cursor-pointer"
            >
              <h4 className="text-[15px] font-medium line-clamp-2">
                Order No : {order.orderNo}
              </h4>
              <div className="flex items-center gap-2">
                <p className="text-[14px] capitalize px-3 font-medium py-1 rounded-md bg-main ">
                  {order.fullFilmentStatus}
                </p>
                <p className="text-[14px] capitalize px-3 font-medium py-1 rounded-md bg-main ">
                  {order.paymentStatus}
                </p>
                <p className="text-[14px] capitalize px-3 font-medium py-1 rounded-md bg-main ">
                  ${order.price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
