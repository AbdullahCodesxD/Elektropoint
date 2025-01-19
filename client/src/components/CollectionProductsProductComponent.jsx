import Button from "./Button";

export default function CollectionProductsProductComponent({
  no,
  name,
  src,
  status,
}) {
  return (
    <div className="py-3 px-7 bg-white border-t border-dark/70 flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-5">
        <p className="text-[15px] font-medium">{no}</p>
        <img
          className="h-[40px] object-contain"
          src={src}
          alt={`An image of ${name}`}
        />

        <p className="text-[15px] font-medium">{name}</p>
      </div>

      <Button extraClasses="capitalize text-[14px] cursor-default bg-main px-5 font-medium py-1.5 rounded-md">
        {status}
      </Button>
    </div>
  );
}
