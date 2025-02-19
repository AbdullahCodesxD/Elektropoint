import Button from "../../../components/Button";
import StoreDefaults from "./StoreDefaults";
import StoreDetails from "./StoreDetails";

export default function Settings() {
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-7  pb-[180px] md:pb-7">
      <div className="max-w-screen-lg">
        <h3 className="font-semibold text-2xl">General Settings</h3>

        {/* <Button
          type="primary"
          to="/dashboard/settings/general/new"
          extraClasses="max-w-[190px] block ml-auto py-1.5  font-[400] text-[15px]"
        >
          New Store
        </Button> */}

        <StoreDetails />
        {/* <StoreDefaults /> */}
      </div>
    </div>
  );
}
