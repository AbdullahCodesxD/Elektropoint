import { useNavigate } from "react-router";
import Button from "../../../../components/Button";
import { PlusSvg } from "../../../../components/Svgs";

export default function CollectionsHeader({ isAnySelected, handleDelete }) {
  const navigate = useNavigate();

  function goToNew() {
    navigate("new");
  }
  return (
    <div className="flex items-center gap-3 justify-between flex-wrap p-3">
      <div className="flex items-center gap-3">
        <Button extraClasses="bg-main px-3 py-1 rounded-lg font-medium">
          All
        </Button>

        <Button handler={goToNew}>
          <PlusSvg color="black" height={11} />
        </Button>
      </div>
      <div className="mr-2 flex gap-2">
        {/* <Button extraClasses="bg-main" type="orderHeader">
                <SearchSvg color="white" height={20} />
              </Button> */}
        {isAnySelected && (
          <Button
            handler={handleDelete}
            extraClasses="bg-main"
            type="orderHeader"
          >
            Delete
          </Button>
        )}
      </div>
    </div>
  );
}
