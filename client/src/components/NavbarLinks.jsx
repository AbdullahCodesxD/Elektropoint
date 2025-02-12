import Button from "./Button";
import { ArrowSvg } from "./Svgs";
export default function NavbarLinks({ collections }) {
  return (
    <div className="max-h-[90%] my-1 overflow-y-auto navLinks">
      {collections.map((collection, i) => (
        <Button
          extraClasses={i < collections.length - 1 && "border-b border-black"}
          type="navbarLink"
          key={collection._id}
          to={`/collection/${collection.slug}`}
        >
          {collection.title} <ArrowSvg height={10} width={14} />
        </Button>
      ))}
    </div>
  );
}
