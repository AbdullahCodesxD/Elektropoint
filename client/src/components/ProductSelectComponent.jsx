import { Link, useParams } from "react-router-dom";

export default function ProductSelectComponent({ children, price, src }) {
  const { product, category } = useParams();
  return (
    <Link
      to={`/product/${category}/${product}`}
      className="block w-full p-5 bg-white rounded-xl"
      style={{
        boxShadow: "0px 0px 4px rgba(0,0,0,.3)",
      }}
    >
      <h3 className="text-dark/70 font-semibold text-[22px]">{children}</h3>
      <img
        src={src}
        className="my-2 w-full block mx-auto object-cover rotate-180"
      />

      <p className="block w-fit ml-auto font-semibold text-[24px]">${price}</p>
    </Link>
  );
}
