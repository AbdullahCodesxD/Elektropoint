import { useState } from "react";
import Button from "../../../../../components/Button";
import { CrossSvg } from "../../../../../components/Svgs";

export default function CollectionAddImages({ images, setImages }) {
  // const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  function handleImages(e) {
    e.preventDefault();
    const files = e.target.files;

    if (files.length + urls.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }
    if (!files || files.length === 0) return;
    const fileUrls = Object.values(files).map((file) =>
      URL.createObjectURL(file)
    );

    setUrls([...urls, ...fileUrls]);
    setImages([...images, ...files]);
  }

  function removeImage(url) {
    const indexOf = urls.indexOf(url);

    if (indexOf !== -1) {
      setUrls(urls.filter((_, i) => i !== indexOf));
      setImages(images.filter((_, i) => i !== indexOf));
    }
  }
  return (
    <div className="h-fit py-3 px-5 rounded-lg bg-white">
      <h4 className="text-[17px]">Image</h4>

      <label
        htmlFor="images"
        className="cursor-pointer w-full aspect-[3/2] flex flex-col gap-1 items-center justify-center border border-dark/50 rounded-lg mt-1"
      >
        <p className="px-5 py-1 rounded-md bg-main">Add Image</p>
        <p className="text-[14px] text-dark/70">Or drop an image to upload</p>
      </label>

      {urls.length > 0 && (
        <div className="mt-1 flex items-center gap-1 flex-wrap">
          {urls.map((url) => (
            <div key={url} className="relative">
              <img
                src={url}
                className="h-[80px] aspect-square object-contain border p-2 rounded-md"
              />

              <Button
                handler={() => removeImage(url)}
                extraClasses="bg-main p-1  absolute top-0   right-0"
              >
                <CrossSvg height={8} color="black" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <input
        type="file"
        id="images"
        accept="image/*"
        multiple
        onChange={handleImages}
        className="hidden"
      />
    </div>
  );
}
