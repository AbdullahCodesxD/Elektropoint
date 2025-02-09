import { useSelector } from "react-redux";
import AddStaffAccount from "./AddStaffAccount";
import Collaborator from "./Collaborator";
import StoreOwner from "./StoreOwner";
import { useEffect } from "react";
import { getUsers } from "../../../../utils/userApi";

export default function UsersAndPermissions() {
  const users = useSelector((state) => state.users.users);
  useEffect(
    function () {
      if (users.length === 0) getUsers();
    },
    [users]
  );
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-7 mb-[140px] md:pb-7">
      <div className="max-w-screen-lg">
        <h3 className="font-semibold text-2xl">Permission</h3>

        <p className="text-black/70 text-[14px]">
          Manage what user can see or do in your store
        </p>
        <div className="bg-white p-4 rounded-xl w-full mb-4">
          {users.map((user) => {
            return <StoreOwner key={user._id} data={user} />;
          })}
        </div>
        <AddStaffAccount />
        {/* <Collaborator /> */}
      </div>
    </div>
  );
}
