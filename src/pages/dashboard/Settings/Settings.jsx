import StoreDefaults from "./StoreDefaults";
import StoreDetails from "./StoreDetails";

export default function Settings() {
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-7  pb-[180px] md:pb-7">
      <div className="max-w-screen-lg">
        <h3 className="font-semibold text-2xl">General Settings</h3>

        <StoreDetails />
        <StoreDefaults />
      </div>
    </div>
  );
}
