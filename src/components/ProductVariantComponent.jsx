import Button from "./Button";

export default function ProductVariantComponent({ name, value }) {
  return (
    <div>
      <p className="capitalize font-semibold text-[15px] mb-0.5">{name}</p>
      <Button extraClasses="bg-main rounded-md px-5 py-1.5 text-[15px] font-medium">
        {" "}
        {value}
      </Button>
    </div>
  );
}
