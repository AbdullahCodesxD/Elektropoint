import { useNavigate } from "react-router";
import Button from "./Button";
import { BackSvg } from "./Svgs";

export default function CustomerDetailsHeader({ name, address, date }) {
  const navigate = useNavigate();

  const now = new Date();
  const givenDate = new Date(date);
  const diffInMilliseconds = now - givenDate;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div>
      <div className="flex items-start gap-3">
        <Button handler={goBack}>
          <BackSvg height={20} width={20} />
        </Button>

        <div>
          <p className="text-xl font-medium capitalize">{name}</p>
          <p className="text-dark/70 text-[14px] capitalize">
            {address} + Customer
            {diffInDays === 0
              ? " Since Today"
              : `for ${diffInDays} ${diffInDays === 1 ? "Day" : "Days"}`}
            .
          </p>
        </div>
      </div>
    </div>
  );
}
