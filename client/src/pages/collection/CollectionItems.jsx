import CollectionItemComponent from "../../components/CollectionItemComponent";
const API = import.meta.env.VITE_API;

export default function CollectionItems({ products }) {
  return (
    <div className="p-3 mt-5 flex flex-col gap-4">
      {products.map((product, i) => (
        <CollectionItemComponent
          key={product._id}
          src={
            product.media?.at(0)
              ? `${API}/products/${product.media?.at(0)}`
              : "/product.png"
          }
          description={product.description}
          pieces={1}
          product={product}
          to={`/product/${product.slug}`}
        >
          {product.title}
        </CollectionItemComponent>
      ))}
    </div>
  );
}
