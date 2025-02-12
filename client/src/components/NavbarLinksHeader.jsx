import Button from "./Button";
import { ArrowSvg } from "./Svgs";

export default function NavbarLinksHeader() {
  const active = "border-b-4 border-main md:border-none";
  const notActive = "opacity-70 md:opacity-100";
  return (
    <div className="flex items-center md:flex-col md:justify-between md:w-[440px]">
      <Button extraClasses={active} type="navbarHeader">
        webshop{" "}
        <span className="ml-1 mt-2 md:block hidden">
          <ArrowSvg width={12} color="#99D913" />
        </span>
      </Button>
      {/* <Button extraClasses={notActive} type="navbarHeader">
        pursue
        <span className="ml-1 mt-2 md:block hidden">
          <ArrowSvg width={12} color="#99D913" />
        </span>
      </Button> */}
    </div>
  );
}
