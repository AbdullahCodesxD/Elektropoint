import { useParams } from "react-router";
import DOMPurify from "dompurify";

import ProductsHeader from "../../components/ProductsHeader";
import ProductItem from "./ProductItem";
import ProductAddToCart from "./ProductAddToCart";
import ProductCustomization from "./ProductCustomization";
import ProductDescription from "./ProductDescription";
import ProductDescriptionGeneralAndTechnicalData from "./ProductDescriptionGeneralAndTechnicalData";
import CollectionItemComponent from "../../components/CollectionItemComponent";
import { useEffect } from "react";
import { getProduct, searchProducts } from "../../utils/searchApi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProduct } from "../../slices/searchSlice";
import Loader from "../../components/Loader";
import { goToInitialState, setNoOfBoxes } from "../../slices/customizeBoxSlice";

const API = import.meta.env.VITE_API;
export default function Product() {
  // const { collection, product } = useParams();
  const { product } = useParams();
  const dispatch = useDispatch();
  const currentProduct = useSelector((state) => state.search.currentProduct);
  const isFetched = useSelector((state) => state.search.isFetched);
  const otherProductsWithoutFilter = useSelector(
    (state) => state.search.results
  );
  const otherProducts = otherProductsWithoutFilter
    ?.filter((product) => product._id !== currentProduct._id)
    .slice(
      0,
      otherProductsWithoutFilter.length > 5
        ? 5
        : otherProductsWithoutFilter.length
    );
  useEffect(
    function () {
      dispatch(setCurrentProduct({}));
      getProduct(product);
      dispatch(goToInitialState());
      if (otherProducts.length < 2) {
        searchProducts("product");
      }
    },
    [product]
  );
  if (isFetched && !currentProduct._id) window.location = "/";
  if (!currentProduct._id) return <Loader height={90} width={90} />;
  if (currentProduct.box) {
    dispatch(setNoOfBoxes(currentProduct.boxes || 9));
  }
  return (
    <div>
      {/* <ProductsHeader>{currentProduct.collection}</ProductsHeader> */}
      <ProductItem
        product={currentProduct}
        src={
          currentProduct.media?.at(0)
            ? `${API}/products/${currentProduct.media?.at(0)}`
            : "/product.png"
        }
        box={currentProduct.box}
      >
        {currentProduct?.title || ""}
      </ProductItem>
      <div className="lg:hidden px-3">
        {currentProduct.box && (
          <>
            <ProductCustomization product={currentProduct} />
            <div className="w-fit block ml-auto mb-5 -mt-3">
              <ProductAddToCart product={currentProduct} piece={1} />
            </div>
          </>
        )}

        <ProductDescription>
          <p
            className="description break-words"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(currentProduct.description),
            }}
          />
        </ProductDescription>

        <div className="bg-white p-3 rounded-md">
          <h4 className="font-medium text-lg">Other customers also bought.</h4>
          <div className="flex flex-col gap-3 mt-5">
            {otherProducts.map((product) => {
              return (
                <CollectionItemComponent
                  key={product._id}
                  src={`${API}/products/${product?.media?.at(0)}`}
                  description={product.description}
                  pieces={1}
                  product={product}
                  to={`/product/${product.slug}`}
                >
                  {product.title}
                </CollectionItemComponent>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-[1fr_420px] m-3 p-3 gap-5 ">
        <div className="bg-white py-3 rounded-md h-fit">
          <ProductDescriptionGeneralAndTechnicalData />

          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(currentProduct.description),
            }}
          />
        </div>
        <div className="bg-white p-3 rounded-md">
          <h4 className="font-medium text-lg">Other customers also bought.</h4>
          <div className="flex flex-col gap-3 mt-5">
            {otherProducts.map((product) => {
              return (
                <CollectionItemComponent
                  key={product._id}
                  src={`${API}/products/${product?.media?.at(0)}`}
                  description={product.description}
                  pieces={1}
                  product={product}
                  to={`/product/${product.slug}`}
                >
                  {product.title}
                </CollectionItemComponent>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
