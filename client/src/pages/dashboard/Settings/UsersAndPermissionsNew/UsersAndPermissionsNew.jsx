import Button from "../../../../components/Button";
import { BackSvg } from "../../../../components/Svgs";
import UsersAndPermissionsNewForm from "./UsersAndPermissionsNewForm";

export default function UsersAndPermissionsNew() {
  return (
    <div className="p-3 bg-white rounded-md">
      <div className="flex gap-3 items-center">
        <Button to="/dashboard/settings/general">
          <BackSvg height={16} />
        </Button>
        <h4 className="text-xl font-semibold">Create User</h4>
      </div>

      <UsersAndPermissionsNewForm />
    </div>
  );
}
