import Button from "../../components/Button";
import { PlusSvg } from "../../components/Svgs";

export default function ProductCustomization({ border }) {
  const arr = Array.from({ length: 9 }).fill("o my gosh");
  return (
    <div className="px-3 ">
      <div
        className={`pt-3 pb-5 my-2  ${
          border && "border-b border-t"
        } border-black`}
      >
        <h2 className="font-semibold text-[26px] mb-2">Customize your box</h2>
        <div className="grid grid-cols-3  border-[0.5px] rounded-[10px] border-main">
          {arr.map((_, i) => (
            <Button
              extraClasses={
                i === 0
                  ? "rounded-tl-[10px]"
                  : i === 2
                  ? "rounded-tr-[10px]"
                  : i === 6
                  ? "rounded-bl-[10px]"
                  : i === 8
                  ? "rounded-br-[10px]"
                  : ""
              }
              type="productCustomization"
              to="/product/select/amazing product"
              key={i}
            >
              <PlusSvg height={30} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
