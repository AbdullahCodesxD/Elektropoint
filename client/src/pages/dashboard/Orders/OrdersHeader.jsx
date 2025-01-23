import Button from "../../../components/Button";

export default function OrdersHeader({ setFilter, filter }) {
  return (
    <div className="p-3 flex gap-1">
      <Button
        handler={() => {
          setFilter("all");
        }}
        extraClasses={filter === "all" && "bg-main"}
        type="orderHeader"
      >
        All
      </Button>
      <Button
        extraClasses={filter === "unFulFilled" && "bg-main"}
        handler={() => setFilter("unFulFilled")}
        type="orderHeader"
      >
        Unfulfilled
      </Button>
      <Button
        extraClasses={filter === "unPaid" && "bg-main"}
        handler={() => setFilter("unPaid")}
        type="orderHeader"
      >
        Unpaid
      </Button>
    </div>
  );
}
