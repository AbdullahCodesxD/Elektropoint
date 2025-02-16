import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { PlusSvg } from "../../components/Svgs";
import { addProduct } from "../../slices/customizeBoxSlice";
import { useState } from "react";
import ProductSelectComponent from "../../components/ProductSelectComponent";
import ProductSelectCategoriesComponent from "../../components/ProductSelectCategoriesComponent";
import {
  getCollection,
  getCollectionProducts,
} from "../../utils/clientCollectionApi";
import Loader from "../../components/Loader";
const API = import.meta.env.VITE_API;
export default function ProductCustomization({ border, product }) {
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState(false);
  const dispatch = useDispatch();

  const box = useSelector((state) => state.customBox.box);
  const boxProducts = [...box.filter((p) => p._id), product];
  const [currentIndex, setCurrentIndex] = useState(0);
  const collections = useSelector((state) => state.collections);

  const clientCollection = useSelector((state) => state.clientCollection);
  const isFetched = clientCollection.isFetched;
  const collectionProducts = clientCollection.currentCollectionProducts;

  function toggleActive(e) {
    e.preventDefault();

    setIsActive((isActive) => !isActive);
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <div className="px-3 ">
      {isActive && (
        <div>
          <div
            onClick={(e) => {
              setCategory(false);
              toggleActive(e);
            }}
            className="fixed top-0 z-[600000000] left-0 w-full bg-dark/70 cursor-pointer h-full"
          ></div>
          <div
            className="fixed  w-[95vw] max-w-[1200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6000000001] bg-white rounded-md  h-fit max-h-[90vh] overflow-y-auto

        p-5
          "
          >
            <h4 className="mb-5 line-clamp-1 capitalize text-2xl font-semibold pb-2 border-b border-dark/10">
              {!category ? "Categories" : category}
            </h4>
            <div
              className={`grid grid-cols-1 gap-5 relative
            md:grid-cols-2
            lg:grid-cols-3
            ${category && !isFetched && "min-h-[300px]"}
            `}
            >
              {!category &&
                collections?.map((collection, i) => (
                  <ProductSelectCategoriesComponent
                    key={i}
                    handler={() => {
                      setCategory(collection.title);
                      getCollection(collection.slug);
                      getCollectionProducts(collection.slug);
                    }}
                    products={collection.noOfProducts || 0}
                    src={`${API}/categories/${collection.media?.at(0)}`}
                  >
                    {collection.title}
                  </ProductSelectCategoriesComponent>
                ))}

              {category && !isFetched && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  <Loader height={50} />
                </div>
              )}
              {category && isFetched && collectionProducts.length === 0 && (
                <p className="font-semibold text-xl">No products</p>
              )}
              {category &&
                isFetched &&
                collectionProducts.map((product, i) => (
                  <ProductSelectComponent
                    handler={(e) => {
                      setCategory(false);
                      toggleActive(e);
                      dispatch(
                        addProduct({
                          index: currentIndex,
                          data: product,
                        })
                      );
                    }}
                    price={`${product.price.toFixed(2)}`}
                    src={`${API}/products/${product.media?.at(0)}`}
                    key={i}
                  >
                    {product.title}
                  </ProductSelectComponent>
                ))}
            </div>
          </div>
        </div>
      )}
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
              handler={(e) => {
                toggleActive(e);
                setCurrentIndex(i);
              }}
              key={i}
            >
              {current?.title?.length > 0 && (
                <img
                  className="aspect-square object-contain h-full w-full absolute z-[2]"
                  src={`${API}/products/${current?.media?.at(0)}`}
                />
              )}
              {!current?.title && <PlusSvg height={30} />}
            </Button>
          ))}
        </div>

        <div>
          {boxProducts.map((product, i) => (
            <div
              className="flex items-center justify-between gap-5 pb-1 border-b my-1"
              key={i}
            >
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold line-clamp-1 w-full max-w-[70%] text-sm">
                  {product.title}
                </p>
                <p className="font-semibold min-w-[30%] text-end px-2 py-1 rounded-md text-sm">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
          {boxProducts.length > 0 && (
            <div className="flex items-center justify-between gap-5 pb-1 border-b my-1">
              <div className="flex items-center justify-between w-full">
                <p className="font-semibold line-clamp-1 w-full max-w-[70%] text-sm">
                  Total
                </p>
                <p className="font-semibold min-w-[30%] text-end px-2 py-1 rounded-md text-sm">
                  $
                  {boxProducts
                    .reduce((prev, curr) => prev + curr.price, 0)
                    .toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
