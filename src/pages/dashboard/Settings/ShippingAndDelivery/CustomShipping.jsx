import Button from "../../../../components/Button";

export default function CustomShipping() {
  return (
    <div className="border border-dark/10 rounded-lg">
      <h4 className="font-semibold p-3 text-lg bg-[#f3f3f3]">
        Custom shipping rates
      </h4>

      <div className="p-3">
        <p className="text-[14px] ">
          <Button to="#" extraClasses="text-main">
            Create a new profile
          </Button>{" "}
          to add custom rates or destination restrictions for groups of products
        </p>
      </div>
    </div>
  );
}
