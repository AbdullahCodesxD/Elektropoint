import { useParams } from "react-router";
import ProductsHeader from "../../components/ProductsHeader";
import ProductItem from "./ProductItem";
import ProductAddToCart from "./ProductAddToCart";
import ProductCustomization from "./ProductCustomization";
import ProductDescription from "./ProductDescription";
import ProductDescriptionGeneralAndTechnicalData from "./ProductDescriptionGeneralAndTechnicalData";
import CollectionItemComponent from "../../components/CollectionItemComponent";
import { useEffect } from "react";
import { getProduct } from "../../utils/searchApi";
import { useSelector } from "react-redux";

const API = import.meta.env.VITE_API;
export default function Product() {
  // const { collection, product } = useParams();
  const { product } = useParams();

  const currentProduct = useSelector((state) => state.search.currentProduct);
  useEffect(
    function () {
      getProduct(product);
    },
    [product]
  );
  console.log(currentProduct, currentProduct.media?.at(0));
  return (
    <div>
      {/* <ProductsHeader>{collection}</ProductsHeader> */}
      <ProductItem
        src={
          currentProduct.media?.at(0)
            ? `${API}/products/${currentProduct.media?.at(0)}`
            : "/product.png"
        }
      >
        {currentProduct?.title || ""}
      </ProductItem>
      <div className="lg:hidden">
        <ProductAddToCart piece={1} price={25} />
        <ProductCustomization />
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quia.
        </ProductDescription>
      </div>

      <div className="hidden lg:flex m-3 p-3 gap-5 ">
        <div className="bg-white py-3 rounded-md h-fit">
          <ProductDescriptionGeneralAndTechnicalData />
          <p className="p-3 border-b border-black mb-4">
            Felt-tip pen Artline Twin-Marker EK-041T, double tip: 0.4 mm / 1 mm,
            shared ink tank prevents premature drying of one tip
          </p>

          <div className="px-5">
            <h4 className="mb-2 text-lg">Alternate Articles</h4>

            <CollectionItemComponent
              src={"/product.png"}
              description="Marking pen edding permanent marker for one time use only."
              pieces={1}
              to="/product/hager surge protection/amazing product"
            >
              Amazing Product
            </CollectionItemComponent>
          </div>
        </div>
        <div className="bg-white p-3 rounded-md">
          <h4 className="font-medium text-lg">Other customers also bought.</h4>
          <div className="flex flex-col gap-3 mt-5">
            <CollectionItemComponent
              src="/product.png"
              description="Marking pen edding permanent marker for one time use only."
              pieces={1}
              to="/product/hager surge protection/amazing product"
            >
              Amazing Product
            </CollectionItemComponent>{" "}
            <CollectionItemComponent
              src="/product.png"
              description="Marking pen edding permanent marker for one time use only."
              pieces={1}
              to="/product/hager surge protection/amazing product"
            >
              Amazing Product
            </CollectionItemComponent>{" "}
            <CollectionItemComponent
              src="/product.png"
              description="Marking pen edding permanent marker for one time use only."
              pieces={1}
              to="/product/hager surge protection/amazing product"
            >
              Amazing Product
            </CollectionItemComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
