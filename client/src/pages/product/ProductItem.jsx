import ProductAddToCart from "./ProductAddToCart";
import ProductCustomization from "./ProductCustomization";
import ProductItemDetails from "./ProductItemDetails";

export default function ProductItem({ src, children, product, box = false }) {
  return (
    <div
      className={`p-3 ${!box ? "grid grid-cols-2" : "lg:flex"} 
     lg:bg-white lg:gap-5 lg:mx-3`}
    >
      <img
        className={`max-h-[450px]  w-full lg:max-h-full ${
          !box ? "w-full" : "lg:w-[450px]"
        } object-cover object-center mx-auto block border border-black/40 rounded-2xl lg:mx-0`}
        draggable={false}
        src={src}
        alt={children}
      />
      <ProductItemDetails product={product} box={box}>
        {children}
      </ProductItemDetails>
      {box && (
        <div className="hidden min-h-full w-full lg:max-w-[350px]  md:flex flex-col justify-between">
          <ProductCustomization product={product} border={false} />
          <ProductAddToCart
            reverse={true}
            piece={1}
            price={product.price || 0}
          />
        </div>
      )}
    </div>
  );
}
