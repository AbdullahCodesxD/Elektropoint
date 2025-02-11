import { Link } from "react-router-dom";

export default function ProductComponent({ slug, price, src, children }) {
  return (
    <Link
      to={`/product/${slug}`}
      className="p-[20px] rounded-[25px] bg-white cursor-pointer"
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
      <p className="text-[14px] leading-5 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
        quaerat!
      </p>
      <h5 className="capitalize font-semibold">Price : ${price}</h5>
    </Link>
  );
}
