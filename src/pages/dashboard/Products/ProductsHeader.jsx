import { useNavigate } from "react-router";
import Button from "../../../components/Button";
import { SearchSvg, SortSvg } from "../../../components/Svgs";

export default function ProductsHeader() {
  const navigate = useNavigate();

  function goToCreateProduct() {
    navigate("/dashboard/products/new");
  }
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="p-3 flex gap-1">
        <Button extraClasses="bg-main" type="orderHeader">
          All
        </Button>
        <Button type="orderHeader">Active</Button>
        <Button type="orderHeader">Draft</Button>
        <Button type="orderHeader">Archived</Button>
        <Button handler={goToCreateProduct} extraClasses="font-medium text-xl">
          +
        </Button>
      </div>

      <div className="mr-2 flex gap-2">
        <Button extraClasses="bg-main" type="orderHeader">
          <SearchSvg color="white" height={20} />
        </Button>
        <Button extraClasses="bg-main" type="orderHeader">
          <SortSvg color="white" height={20} />
        </Button>
      </div>
    </div>
  );
}
