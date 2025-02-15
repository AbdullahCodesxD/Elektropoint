import Button from "./Button";
import { CartSvg, PinSvg, SvgWithPin } from "./Svgs";
import DOMPurify from "dompurify";

export default function CollectionItemComponentRight({
  children,
  description,
  pieces,
}) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-3 items-end justify-between ">
        <h3 className="text-[18px] font-semibold line-clamp-2 text-[#222]">
          {children}
        </h3>
        {/* <div className="flex gap-2">
          <Button type="collectionSvg">
            <SvgWithPin height={20} width={20} />
          </Button>
          <Button type="collectionSvg">
            <PinSvg height={20} width={20} />
          </Button>
        </div> */}
      </div>
      <p
        className="line-clamp-5"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(description),
        }}
      />

      {/* <div className="border border-[#ddd] rounded-md flex items-center justify-center mt-3">
        <span className="capitalize w-full text-end pr-2">
          {pieces} {pieces > 1 ? "pieces" : "piece"}
        </span>

        <Button extraClasses="p-2 border-l border-[#ddd]">
          <CartSvg width={30} />
        </Button>
      </div> */}
    </div>
  );
}
