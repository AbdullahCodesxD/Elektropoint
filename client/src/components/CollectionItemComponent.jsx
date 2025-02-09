import { Link } from "react-router-dom";
import CollectionItemComponentRight from "./CollectionItemComponentRight";

export default function CollectionItemComponent({
  children,
  description,
  src,
  pieces,
  to,
}) {
  return (
    <Link
      to={to}
      className="flex  gap-2.5 p-3 rounded-lg bg-white"
      style={{
        boxShadow: "0px 0px 15px rgba(0,0,0,.2)",
      }}
    >
      <div className="p-1 bg-[#F1F1F1] h-fit">
        <img
          className="w-[100px] h-full object-contain object-top "
          src={src}
          alt={description}
        />
      </div>

      <CollectionItemComponentRight pieces={pieces} description={description}>
        {children}
      </CollectionItemComponentRight>
    </Link>
  );
}
