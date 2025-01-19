import links from "../utils/navbarLinks";
import Button from "./Button";
import { ArrowSvg } from "./Svgs";
export default function NavbarLinks() {
  return (
    <div className="max-h-[90%] my-1 overflow-y-auto navLinks">
      {links.map((link, i) => (
        <Button
          extraClasses={i < links.length - 1 && "border-b border-black"}
          type="navbarLink"
          key={link}
          to={`/collection/${link.toLowerCase()}`}
        >
          {link} <ArrowSvg height={10} width={14} />
        </Button>
      ))}
    </div>
  );
}
