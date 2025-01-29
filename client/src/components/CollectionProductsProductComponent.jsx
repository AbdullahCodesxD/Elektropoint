import Button from "./Button";

export default function CollectionProductsProductComponent({
  no,
  name,
  src,
  status,
  productId,
  handler,
  isSelected,
}) {
  return (
    <div className="py-3 px-7 bg-white border-t border-dark/70 flex items-center justify-between gap-3 flex-wrap">
      <div className="flex items-center gap-5">
        <p className="text-[15px] font-medium">{no}</p>
        <img
          className="h-[40px] w-[120px] object-contain"
          src={src}
          alt={`Image of product ${name}`}
        />

        <p className="text-[15px] font-medium">{name}</p>
      </div>

      <div className="flex flex-wrap gap-1">
        <Button
          buttonType="button"
          extraClasses="bg-opacity-50 w-[80px] capitalize text-[12px] cursor-default bg-main px-5 font-medium py-1.5 rounded-md"
        >
          {status}
        </Button>
        <Button
          handler={() => handler(productId, !isSelected)}
          buttonType="button"
          extraClasses="w-[25px] h-[25px] my-auto bg-main aspect-square flex items-center justify-center  rounded-full"
        >
          {isSelected ? "-" : "+"}
        </Button>
      </div>
    </div>
  );
}
