import { useSelector } from "react-redux";
import { AmericanExpress } from "../../components/Svgs";

export default function CustomerInformation() {
  const checkout = useSelector((state) => state.checkout);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="p-3">
      <h4 className="font-medium text-lg text-black/90 mb-2 ">
        Customer Information
      </h4>
      <p className="font-medium text-black/60 leading-[1.5] ">
        {checkout.firstName + " " + checkout.lastName}
        <br />
        {checkout.email}
        <br />
        {checkout.phone}
      </p>

      <h4 className="mt-5 font-medium text-lg text-black/90">
        Shipping Address
      </h4>
      <p className="font-medium text-black/60 leading-[1.5] ">
        {checkout.streetAddress}
        <br />
        {checkout.city}
        <br />
        {checkout.country}
        <br />
        {checkout.phone}
      </p>

      <h4 className="mt-5 font-medium text-lg text-black/90">
        Billing Address
      </h4>
      <p className="font-medium text-black/60 leading-[1.5] ">
        {checkout.streetAddress}
        <br />
        {checkout.city}
        <br />
        {checkout.country}
        <br />
        {checkout.phone}
      </p>

      <h4 className="mt-5 font-medium text-lg text-black/90">
        Shipping Method
      </h4>
      {/* <p className="font-medium text-black/60 leading-[1.5] ">
        Expedited Parcel
      </p> */}

      {/* <h4 className="mt-5 font-medium text-lg text-black/90">Billing Method</h4>
      <p className="font-medium text-black/60 leading-[1.5] flex items-center gap-2">
        <AmericanExpress width={55} height={35} />
        Ends with 6801
      </p> */}
      <p className="font-bold text-[18px] text-black/60 mt-2">
        ${cart.price.toFixed(2)}
      </p>
    </div>
  );
}
