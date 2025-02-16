import { ArrowSvg } from "./Svgs";

export default function ProductSelectCategoriesComponent({
  children,
  products,
  src,
  handler,
}) {
  return (
    <div
      onClick={handler}
      to={children}
      className="block cursor-pointer w-full p-5 bg-white rounded-xl"
      style={{
        boxShadow: "0px 0px 4px rgba(0,0,0,.3)",
      }}
    >
      <h3 className="text-lightBlue flex items-center gap-2 text-[22px]">
        {children} <ArrowSvg height={14} color="#009EE3" />
      </h3>

      <div className="flex items-center justify-evenly gap-1 mt-1">
        <img src={src} className="w-full aspect-video  object-contain" />
      </div>

      <p className="block w-fit ml-auto mt-3">
        {products} {products > 1 ? "products" : "product"}
      </p>
    </div>
  );
}
