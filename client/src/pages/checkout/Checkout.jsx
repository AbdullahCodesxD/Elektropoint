import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import CheckoutStatusComponent from "../../components/CheckoutStatusComponent";
import CardDetailsAndItems from "./CardDetailsAndItems";
import CheckoutForm from "./CheckoutForm";
import { createCustomer } from "../../utils/customerApi";
import { createOrder } from "../../utils/ordersApi";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { setIsComplete } from "../../slices/orderSlice";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);
  const checkout = useSelector((state) => state.checkout);
  const isOrderComplete = useSelector((state) => state.orders.isComplete);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...checkout,
      name: checkout.firstName + " " + checkout.lastName,
      address: checkout.streetAddress,
    };
    delete data.firstName;
    delete data.lastName;
    delete data.streetAddress;
    createCustomer(data)
      .then((res) => {
        const id = res.data._id;
        createOrder({
          customer: id,
          product: cart.cart.map((product) => product.product._id),
          noOfProducts: cart.noOfProducts,
          price: cart.price,
        })
          .then((res) => {
            navigate(`/order-complete`);
            dispatch(setIsComplete(true));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }
  useEffect(function () {
    if (cart.noOfProducts === 0) {
      navigate("/cart");
    }
    if (isOrderComplete) {
      navigate("/order-complete");
    }
  }, []);
  return (
    <div className="md:bg-white">
      <CheckoutStatusComponent disable={true} />
      <form
        onSubmit={handleSubmit}
        className="md:grid gap-5"
        style={{ gridTemplateColumns: "1fr 500px" }}
      >
        <CheckoutForm />
        <div>
          <CardDetailsAndItems />

          <Button
            // to="/order-complete"
            extraClasses="w-[90%] mx-auto"
            type="primary"
          >
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
}
