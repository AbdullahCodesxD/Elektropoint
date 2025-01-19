import CheckoutStatusComponent from "../../components/CheckoutStatusComponent";
import CardDetailsAndItems from "./CardDetailsAndItems";
import CheckoutForm from "./CheckoutForm";

export default function Checkout() {
  return (
    <div className="md:bg-white">
      <CheckoutStatusComponent />
      <div
        className="md:grid gap-5"
        style={{ gridTemplateColumns: "1fr 500px" }}
      >
        <CheckoutForm />
        <CardDetailsAndItems />
      </div>
    </div>
  );
}
