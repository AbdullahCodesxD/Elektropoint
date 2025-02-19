import { useEffect } from "react";
import Button from "../../../components/Button";
import { LocationSvg, PencilSvg, ShopSvg } from "../../../components/Svgs";
import { useSelector } from "react-redux";
import { getStores } from "../../../utils/storeApi";

export default function StoreDetails() {
  // const stores = useSelector((state) => state.stores.stores);
  // console.log(stores, "--");

  // useEffect(function () {
  //   getStores();
  // }, []);
  return (
    <div className="bg-white rounded-lg p-3 mt-4">
      <h3 className="font-semibold">Store Details</h3>

      <div className="mt-4 border-2 border-black/10 rounded-lg">
        <div className="flex items-center justify-between gap-3 py-3 px-5">
          <div className="flex items-center gap-3">
            <ShopSvg height={20} />

            <p className="text-[15px] capitalize text-black/80">
              Elektropoint <br />
              <span className="lowercase">store@xoxodigitals.com</span>
            </p>
          </div>

          {/* <Button>
            <PencilSvg height={15} />
          </Button> */}
        </div>

        {/* ////////// */}
        <div className="border-t-2 border-dark/30 py-3 px-5">
          <div className="flex items-center gap-3">
            <LocationSvg height={20} />

            <p className="text-[15px] text-black/80">
              Billing Adress <br />
              <span className="capitalize">Bahawalpur, Punjab, Pakistan</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
