import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { PlusSvg } from "../../components/Svgs";
import {
  addProduct,
  removeOrToggleProduct,
} from "../../slices/customizeBoxSlice";
const API = import.meta.env.VITE_API;
export default function ProductCustomization({ border, product }) {
  const box = useSelector((state) => state.customBox.box);
  const dispatch = useDispatch();
  return (
    <div className="px-3 ">
      <div
        className={`pt-3 pb-5 my-2  ${
          border && "border-b border-t"
        } border-black`}
      >
        <h2 className="font-semibold text-[26px] mb-2">Customize your box</h2>
        <div className="grid grid-cols-3  border-[0.5px] rounded-[10px] border-main">
          {box.map((current, i) => (
            <Button
              extraClasses={`overflow-hidden relative ${
                i === 0
                  ? "rounded-tl-[10px]"
                  : i === 2
                  ? "rounded-tr-[10px]"
                  : i === 6
                  ? "rounded-bl-[10px]"
                  : i === 8
                  ? "rounded-br-[10px]"
                  : ""
              }`}
              type="productCustomization"
              handler={() => {
                if (!current.title) {
                  dispatch(
                    addProduct({
                      index: i,
                      data: product,
                    })
                  );
                } else {
                  dispatch(
                    removeOrToggleProduct({
                      index: i,
                      data: product,
                    })
                  );
                }
              }}
              // to="/product/select/amazing product"
              key={i}
            >
              {current.title?.length > 0 && (
                <img
                  className="aspect-square object-contain h-full w-full absolute z-[2]"
                  src={`${API}/products/${current?.media?.at(0)}`}
                />
              )}
              {!current.title && <PlusSvg height={30} />}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
