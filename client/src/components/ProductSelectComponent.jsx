export default function ProductSelectComponent({
  children,
  price,
  src,
  handler = () => {},
}) {
  return (
    <div
      onClick={handler}
      className="block w-full cursor-pointer bg-white rounded-xl overflow-hidden border border-dark"
    >
      <img
        src={src}
        className="aspect-video object-contain object-top w-full"
      />
      <div className="p-3 flex gap-3">
        <h3 className="text-dark/70 font-semibold text-[16px] line-clamp-1">
          {children}
        </h3>

        <p className="block w-fit ml-auto font-semibold text-[18px]">
          ${price}
        </p>
      </div>
    </div>
  );
}
