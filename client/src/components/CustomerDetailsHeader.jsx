import { useNavigate } from "react-router";
import Button from "./Button";
import { BackSvg } from "./Svgs";

export default function CustomerDetailsHeader() {
  const navigate = useNavigate();

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
          <p className="text-xl font-medium">Abdullahcodesxd</p>
          <p className="text-dark/70 text-[14px] ">
            Bahawalpur, Pakistan + Customer for 4 days.
          </p>
        </div>
      </div>
    </div>
  );
}
