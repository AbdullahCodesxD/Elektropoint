import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

export default function ProductComponent({
  slug,
  price,
  src,
  children,
  description = "",
}) {
  return (
    <Link
      to={`/product/${slug}`}
      className="p-[20px] w-full rounded-[25px] bg-white cursor-pointer"
      style={{
        boxShadow: "0px 0px 10px rgba(0,0,0,.2)",
      }}
    >
      <img
        className="h-[220px] w-full object-cover object-top border border-black rounded-[15px]"
        src={src}
        alt={`An image of ${children}`}
      />
      <h4 className="capitalize text-base font-semibold mt-4">
        {children.toLowerCase()}
      </h4>
      <p
        className="text-[14px] line-clamp-2"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />
      <h5 className="capitalize font-semibold">Price : ${price}</h5>
    </Link>
  );
}
