import { useState } from "react";
import { ImgSvg } from "./Svgs";

export default function ProductVariantsDetailsComponent() {
  const [currentImage, setCurrentImage] = useState("");
  const [currentImageUrl, setCurrentImageUrl] = useState("");

  function handleImage(e) {
    e.preventDefault();

    const file = e.target.files[0];
    if (!file) return;

    setCurrentImage(file);

    setCurrentImageUrl(URL.createObjectURL(file));
  }
  return (
    <div className="grid grid-cols-3 gap-7 items-center py-2 px-5">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="appearance-none cursor-pointer border-2 border-main h-[20px] rounded-md aspect-square checked:appearance-auto"
        />

        <label
          htmlFor="productImage"
          className="cursor-pointer h-[65px] aspect-square flex items-center justify-center"
          style={{
            boxShadow: "0px 0px 3px rgba(0,0,0,.2)",
          }}
        >
          {currentImageUrl ? (
            <img
              className="h-[65px] aspect-square object-contain"
              src={currentImageUrl}
              alt="Image of new product"
            />
          ) : (
            <ImgSvg height={27} />
          )}
        </label>
        <input
          onChange={handleImage}
          id="productImage"
          type="file"
          accept="image/*"
          className="hidden"
        />

        <p className="text-[15px] font-medium">32GB/2GB</p>
      </div>

      <input
        type="number"
        className="text-[14px] outline-none border border-dark/60 rounded-md p-3 h-[40px] w-full"
      />

      <input
        type="number"
        className="text-[14px] outline-none border border-dark/60 rounded-md p-3 h-[40px] w-full"
      />
    </div>
  );
}
