import Button from "../../../../components/Button";

export default function AddStaffAccount() {
  return (
    <div className="bg-white p-4 rounded-xl w-full mt-4">
      <h4 className="font-semibold text-base mb-2.5">Add staff account</h4>

      <Button
        type="primary"
        extraClasses="max-w-fit py-1.5 px-6 font-[400] text-[15px]"
      >
        Add Account
      </Button>
    </div>
  );
}
