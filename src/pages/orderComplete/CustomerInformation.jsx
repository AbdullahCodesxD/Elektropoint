import { AmericanExpress } from "../../components/Svgs";

export default function CustomerInformation() {
  return (
    <div className="p-3">
      <h2 className="font-medium text-[24px] mb-2 ">Customer Information</h2>

      <h4 className="mt-5 font-medium text-lg text-black/90">
        Shipping Address
      </h4>
      <p className="font-medium text-black/60 leading-[1.5] ">
        Liz Brown 2731 Davis Drive
        <br />
        Markham ON L3P 2M4
        <br />
        Canada
        <br />
        403-254-2544
      </p>

      <h4 className="mt-5 font-medium text-lg text-black/90">
        Billing Address
      </h4>
      <p className="font-medium text-black/60 leading-[1.5] ">
        Liz Brown 2731 Davis Drive
        <br />
        Markham ON L3P 2M4
        <br />
        Canada
        <br />
        403-254-2544
      </p>

      <h4 className="mt-5 font-medium text-lg text-black/90">
        Shipping Method
      </h4>
      <p className="font-medium text-black/60 leading-[1.5] ">
        Expedited Parcel
      </p>

      <h4 className="mt-5 font-medium text-lg text-black/90">Billing Method</h4>
      <p className="font-medium text-black/60 leading-[1.5] flex items-center gap-2">
        <AmericanExpress width={55} height={35} />
        Ends with 6801
      </p>
      <p className="font-bold text-[18px] text-black/60 mt-2">$244.69</p>
    </div>
  );
}
