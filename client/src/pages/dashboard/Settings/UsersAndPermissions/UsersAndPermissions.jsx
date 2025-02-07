import AddStaffAccount from "./AddStaffAccount";
import Collaborator from "./Collaborator";
import StoreOwner from "./StoreOwner";

export default function UsersAndPermissions() {
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-7 mb-[140px] md:pb-7">
      <div className="max-w-screen-lg">
        <h3 className="font-semibold text-2xl">Permission</h3>

        <p className="text-black/70 text-[14px]">
          Manage what user can see or do in your store
        </p>

        <StoreOwner />
        <AddStaffAccount />
        {/* <Collaborator /> */}
      </div>
    </div>
  );
}
