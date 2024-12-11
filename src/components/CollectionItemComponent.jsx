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
      <div className="p-1 bg-[#F1F1F1] min-h-full">
        <img
          className="w-[100px] h-full object-cover "
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
