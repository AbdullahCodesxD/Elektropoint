import { useNavigate } from "react-router";
import Button from "../../../../components/Button";
import { PlusSvg } from "../../../../components/Svgs";

export default function CollectionsHeader() {
  const navigate = useNavigate();

  function goToNew() {
    navigate("new");
  }
  return (
    <div className="flex items-center gap-3 p-3">
      <Button extraClasses="bg-main px-3 py-1 rounded-lg font-medium">
        All
      </Button>

      <Button handler={goToNew}>
        <PlusSvg color="black" height={11} />
      </Button>
    </div>
  );
}
