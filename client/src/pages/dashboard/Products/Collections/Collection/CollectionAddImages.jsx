import { useEffect, useState } from "react";
import Button from "../../../../../components/Button";
import { CrossSvg } from "../../../../../components/Svgs";
const API = import.meta.env.VITE_API;

export default function CollectionAddImages({
  images,
  setImages,
  currentMedia,
}) {
  const [urls, setUrls] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);

  const fetchImage = async () => {
    try {
      const fetchedImages = await Promise.all(
        currentMedia?.map(async (image) => {
          const res = await fetch(`${API}/categories/${image}`);
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
      );
      setCurrentImages([...new Set(fetchedImages)]); // Ensure uniqueness
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    setCurrentImages([]); // Reset before fetching new ones
    fetchImage();
  }, [currentMedia]);

  // Update URLs whenever images change
  useEffect(() => {
    const fileUrls = images.map((file) => URL.createObjectURL(file));
    setUrls(fileUrls);
  }, [images]);

  function handleImages(e) {
    e.preventDefault();
    const files = Array.from(e.target.files);

    if (files.length + images.length > 3) {
      alert("You can only upload up to 3 images.");
      return;
    }
    if (!files.length) return;

    setImages((prevImages) => [...prevImages, ...files]);
  }

  function removeImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }
  console.log(currentImages);

  return (
    <div className="h-fit py-3 px-5 rounded-lg bg-white">
      <h4 className="text-[17px]">Image</h4>

      <label
        htmlFor="images"
        className="cursor-pointer w-full aspect-[3/2] flex flex-col gap-1 items-center justify-center border border-dark/50 rounded-lg mt-1"
      >
        <p className="px-5 py-1 rounded-md bg-main">Add Image</p>
      </label>

      {currentImages.length > 0 && (
        <div className="mt-1 flex items-center gap-1 flex-wrap">
          {currentImages.map((url, index) => (
            <div key={url} className="relative">
              <img
                src={url}
                className="h-[80px] aspect-square object-contain border p-2 rounded-md"
                alt="Uploaded preview"
              />
              <Button
                handler={() => removeImage(index)}
                extraClasses="bg-main p-1 absolute top-0 right-0"
              >
                <CrossSvg height={8} color="black" />
              </Button>
            </div>
          ))}
        </div>
      )}

      {urls.length > 0 && (
        <div className="mt-1 flex items-center gap-1 flex-wrap">
          {urls.map((url, index) => (
            <div key={url} className="relative">
              <img
                src={url}
                className="h-[80px] aspect-square object-contain border p-2 rounded-md"
                alt="Uploaded preview"
              />
              <Button
                handler={() => removeImage(index)}
                extraClasses="bg-main p-1 absolute top-0 right-0"
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
