import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";
import { getProducts } from "../../../utils/productsApi";
import { getCustomers } from "../../../utils/customerApi";
import { createOrder } from "../../../utils/ordersApi";
export default function NewOrder() {
  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [fulfilment, setFulfilment] = useState("unfullfilled");
  const [paymentStatus, setPaymentStatus] = useState("unpaid");
  const [delivery, setDelivery] = useState("delivery");

  const customers = useSelector((state) => state.customers.customers);
  const products = useSelector((state) => state.products.products);

  function handleSubmit(e) {
    e.preventDefault();
    if (!customer || !product) return;
    const customerId = customers.find(
      (current) => current.email === customer
    )._id;
    const productId = products.find((current) => current.title === product)._id;
    createOrder({
      customer: customerId,
      product: productId,
      fullFilmentStatus: fulfilment,
      paymentStatus,
      deliveryMethod: delivery,
    });
  }

  useEffect(() => {
    getProducts();
    getCustomers();
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-[20px] bg-white rounded-lg shadow-md "
    >
      <div className="max-w-[700px]">
        <div className="mb-1 min-w-[300px] flex flex-col gap-2">
          <label
            htmlFor="customer"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Customers
          </label>
          <select
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="outline-none cursor-pointer border border-dark/70 rounded-md p-2"
          >
            <option value="" className="hidden">
              Select
            </option>
            {customers.map((customer) => (
              <option className="capitalize" key={customer.id}>
                {customer.email}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-1 min-w-[300px] flex flex-col gap-2">
          <label
            htmlFor="products"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Products
          </label>
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="outline-none cursor-pointer border border-dark/70 rounded-md p-2"
          >
            <option value="" className="hidden">
              Select
            </option>
            {products.map((product) => (
              <option className="capitalize" key={product.id}>
                {product.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="fullfilment"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Fullfilment Status
          </label>
          <select
            onChange={(e) => setFulfilment(e.target.value)}
            value={fulfilment}
            className="outline-none cursor-pointer border border-dark/70 rounded-md p-2"
          >
            <option value="fullfilled">Fulfilled</option>
            <option value="unfullfilled">Un-Fulfilled</option>
          </select>
        </div>
        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="payment"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Payment Status
          </label>
          <select
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
            className="outline-none cursor-pointer border border-dark/70 rounded-md p-2"
          >
            <option value="paid">Paid</option>
            <option value="unpaid">Un-Paid</option>
          </select>
        </div>

        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="delivery"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Delievery Methord
          </label>
          <select
            value={delivery}
            onChange={(e) => setDelivery(e.target.value)}
            className="outline-none cursor-pointer border border-dark/70 rounded-md p-2"
          >
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
        </div>
        <Button extraClasses="ml-auto block w-fit bg-main text-white px-12 py-1.5 rounded-md mt-3  transition-all hover:opacity-80">
          Create
        </Button>
      </div>
    </form>
  );
}
