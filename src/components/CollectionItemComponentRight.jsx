import Button from "./Button";
import { CartSvg, PinSvg, SvgWithPin } from "./Svgs";

export default function CollectionItemComponentRight({
  children,
  description,
  pieces,
}) {
  return (
    <div className="w-full">
      <div className="flex gap-3 items-end justify-between ">
        <h3 className="text-[18px] font-semibold line-clamp-2 text-[#222]">
          {children}
        </h3>
        <div className="flex gap-2">
          <Button type="collectionSvg">
            <SvgWithPin height={20} width={20} />
          </Button>
          <Button type="collectionSvg">
            <PinSvg height={20} width={20} />
          </Button>
        </div>
      </div>
      <p className="line-clamp-2 font-medium text-[#222] leading-[1.3] mt-2">
        {description}
      </p>

      <div className="border border-[#ddd] rounded-md flex items-center justify-center mt-3">
        <spam className="capitalize w-full text-end pr-2">
          {pieces} {pieces > 1 ? "pieces" : "piece"}
        </spam>

        <Button extraClasses="p-2 border-l border-[#ddd]">
          <CartSvg width={30} />
        </Button>
      </div>
    </div>
  );
}
