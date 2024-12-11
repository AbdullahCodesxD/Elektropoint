import Button from "../../../components/Button";

export default function OrdersHeader() {
  return (
    <div className="p-3 flex gap-1">
      <Button extraClasses="bg-main" type="orderHeader">
        All
      </Button>
      <Button type="orderHeader">Unfulfilled</Button>
      <Button type="orderHeader">Unpaid</Button>
    </div>
  );
}
