import { useNavigate } from "react-router";
import Button from "./Button";
import { BackSvg } from "./Svgs";
import { deleteOrder, fulFillOrder } from "../utils/ordersApi";

export default function OrdersDetailsHeader({
  fullFilmentStatus,
  paymentStatus,
  orderNo,
  date,
  id,
}) {
  const navigate = useNavigate();

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div>
      <div className="flex items-center gap-3">
        <Button handler={goBack}>
          <BackSvg height={20} width={20} />
        </Button>

        <p className="text-xl font-medium">#{orderNo}</p>

        <p className="bg-white capitalize text-[14px] px-3 font-medium py-1 rounded-md flex items-center gap-1">
          <span className="block h-[7px] aspect-square rounded-full bg-main"></span>{" "}
          {paymentStatus}
        </p>
        <p className="text-[14px] capitalize px-3 font-medium py-1 rounded-md bg-main ">
          {fullFilmentStatus}
        </p>
      </div>

      <div className="flex flex-col-reverse items-end mt-5 md:flex-row md:items-center justify-between  md:mt-1 gap-3">
        <p className="text-dark/70 text-[14px]">
          {date &&
            new Intl.DateTimeFormat("en-us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            }).format(new Date(date))}
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {fullFilmentStatus === "unfullfilled" && (
            <Button
              type="primary"
              handler={() => {
                fulFillOrder(id);
              }}
              extraClasses="max-w-fit px-4 py-1 text-dark/70 font-medium"
            >
              Fulfill Order
            </Button>
          )}
          <Button
            type="primary"
            handler={() => {
              deleteOrder(id);
            }}
            extraClasses="max-w-fit px-4 py-1 text-dark/70 font-medium"
          >
            Cancel Order
          </Button>
        </div>
      </div>
    </div>
  );
}
