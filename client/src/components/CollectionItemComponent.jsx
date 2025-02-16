import { Link } from "react-router-dom";
import CollectionItemComponentRight from "./CollectionItemComponentRight";
import { useDispatch } from "react-redux";
import { setIsFetched } from "../slices/clientCollectionSlice";
import ProductAddToCart from "../pages/product/ProductAddToCart";

export default function CollectionItemComponent({
  children,
  description,
  src,
  pieces,
  to,
  product,
}) {
  const dispatch = useDispatch();
  return (
    <Link
      to={to}
      onClick={(e) => {
        if (e.target.type === "submit") return;
        dispatch(setIsFetched(false));
      }}
      className=" p-3 rounded-lg bg-white"
      style={{
        boxShadow: "0px 0px 15px rgba(0,0,0,.2)",
      }}
    >
      <div className="flex  gap-2.5">
        <div className="p-1 h-fit">
          <img
            className="w-[100px] h-full object-contain object-top "
            src={src}
            alt={description}
          />
        </div>

        <CollectionItemComponentRight pieces={pieces} description={description}>
          {children}
        </CollectionItemComponentRight>
      </div>
      <div className="border-t border-[#ddd] flex items-center justify-end p-2 mt-4">
        <ProductAddToCart product={product} paddding={false} reverse={true} />
      </div>
    </Link>
  );
}
