import { useState } from "react";
import { CrossSvg, PlusSvg } from "../../../components/Svgs";
import Button from "../../../components/Button";

export default function AddMedia() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  function handleImageChange(e) {
    e.preventDefault();
    const files = e.target.files;
    if (files.length === 0) return;
    const imagesArr = Object.values(files);
    console.log(imagesArr);
    const urlsArr = imagesArr.map((image) => URL.createObjectURL(image));

    setImages([...imagesArr, ...images]);
    setUrls([...urls, ...urlsArr]);
  }

  function removeImage(img) {
    const index = urls.indexOf(img);

    if (index !== -1) {
      setImages(images.filter((_, i) => i !== index));
      setUrls(urls.filter((_, i) => i !== index));
    }
  }
  return (
    <div>
      <h4 className="mt-1 pl-0.5 text-base font-medium">Media</h4>
      {urls.length > 0 && (
        <div className="mb-2 flex items-center gap-2 flex-wrap">
          {urls.map((url) => (
            <div
              key={url}
              className="relative p-3 rounded-lg border border-dark/10 w-fit"
            >
              <img
                className="h-[70px] aspect-square object-contain"
                src={url}
                alt="Oho beat change"
              />

              <Button
                handler={(e) => {
                  e.preventDefault();
                  removeImage(url);
                }}
                extraClasses="bg-blue rounded-full h-[25px] aspect-square flex items-center justify-center absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 "
              >
                <CrossSvg height={10} width={10} color="white" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <label
        htmlFor="media"
        className="bg-[#eaeaea] h-[75px] cursor-pointer aspect-square flex items-center justify-center rounded-lg"
      >
        <PlusSvg height={10} color="#000" />
      </label>
      <input
        id="media"
        onChange={handleImageChange}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
      />
    </div>
  );
}
