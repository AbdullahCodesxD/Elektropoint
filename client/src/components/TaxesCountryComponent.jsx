import { useNavigate, useParams } from "react-router";
import Button from "./Button";
import { BackSvg } from "./Svgs";
import TaxesCountryRegionalSettings from "./TaxesCountryRegionalSettings";
import TaxesExamption from "./TaxesExamption";

export default function TaxesCountryComponent() {
  const navigate = useNavigate();
  const { country } = useParams();

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-4 ">
      <div className="max-w-screen-lg">
        <div className="flex items-center gap-3">
          <Button handler={goBack}>
            <BackSvg height={15} />
          </Button>
          <h3 className="capitalize text-xl font-medium">{country}</h3>
        </div>

        <div className="mt-3">
          <TaxesCountryRegionalSettings country={country} />
        </div>

        <div className="mt-4">
          <TaxesExamption />
        </div>
      </div>
    </div>
  );
}
