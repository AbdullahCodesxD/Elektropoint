import { useEffect, useState } from "react";
import { CrossSvg, PlusSvg } from "../../../components/Svgs";
import Button from "../../../components/Button";

const API = import.meta.env.VITE_API;
export default function AddMedia({
  setMedia: setImages,
  media: images,
  setDeleteImages,
  deleteImages,
  currentMedia,
}) {
  const [urls, setUrls] = useState([]);
  const [currentImages, setCurrentImages] = useState([]);

  const fetchImage = function () {
    try {
      currentMedia?.forEach((image) => {
        fetch(`${API}/products/${image}`)
          .then((res) => res.blob())
          .then((res) =>
            setCurrentImages([...currentImages, URL.createObjectURL(res)])
          );
      });
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  function handleImageChange(e) {
    e.preventDefault();

    const files = e.target.files;

    if (currentImages.length + urls.length + files.length > 3) return;
    if (files.length === 0) return;
    const imagesArr = Object.values(files);
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
  function handleCurrentImageChange(e, currentUrl, i) {
    e.preventDefault();
    // New Image
    const files = e.target.files;
    if (files.length === 0) return;

    // Arr of image values
    const imagesArr = Object.values(files);
    // Converting it to urls
    const urlsArr = imagesArr.map((image) => URL.createObjectURL(image));

    // Filtering out the current url and setting the new one
    setCurrentImages((currentImages) =>
      currentImages.filter((url) => url !== currentUrl)
    );
    setCurrentImages((currentImages) => [...currentImages, ...urlsArr]);

    // Settings image to be uploaded
    setImages((images) => [...images, ...imagesArr]);

    // Here images that needs to be deleted from server
    if (deleteImages.indexOf(currentMedia[i]) === -1) {
      setDeleteImages((images) => [...images, currentMedia[i]]);
    }
  }
  useEffect(
    function () {
      fetchImage();
    },
    [currentMedia]
  );
  return (
    <div>
      {currentImages.length > 0 && (
        <>
          <h4 className="mt-1 mb-3 pl-0.5 text-base font-medium">
            Current Media
          </h4>
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            {currentImages.map((url, i) => (
              <label
                key={url}
                onChange={(e) => handleCurrentImageChange(e, url, i)}
                id={`productImage${i}`}
                className="relative cursor-pointer p-3 rounded-lg border border-dark/10 w-fit"
              >
                <img
                  className="h-[70px] aspect-square object-contain"
                  src={url}
                  alt="Oho beat change"
                />
                <input
                  htmlFor={`productImage${i}`}
                  type="file"
                  className="hidden"
                />

                {/* <Button
                  handler={(e) => {
                    e.preventDefault();
                  }}
                  extraClasses="bg-blue rounded-full h-[25px] aspect-square flex items-center justify-center absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 "
                >
                  <CrossSvg height={10} width={10} color="white" />
                </Button> */}
              </label>
            ))}
          </div>
        </>
      )}

      {currentImages.length < 3 && (
        <>
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
        </>
      )}

      {currentImages.length < 3 && (
        <>
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
        </>
      )}
    </div>
  );
}
