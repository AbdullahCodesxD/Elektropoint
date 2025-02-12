import Button from "./Button";
import ProductComponent from "./ProductComponent";

const API = import.meta.env.VITE_API;
export default function CategoriesComponent({
  children,
  viewAll = true,
  category,
}) {
  return (
    <div className="bg-white px-3 py-5 border-t border-black">
      <div className="max-w-[1500px] block mx-auto ">
        <div className="md:flex items-center justify-between  w-full">
          <h3 className="font-semibold text-[18px] uppercase">{children}</h3>

          {viewAll && (
            <Button
              to={`/collection/${category.slug}`}
              style={{ boxShadow: "0px 0px 15px 1px rgba(0,0,0,.4)" }}
              type="categories"
              extraClasses="hidden md:block ml-0 mr-0 mt-0"
            >
              View All
            </Button>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {category.products?.map((product) => {
            return (
              <ProductComponent
                key={product._id}
                src={`${API}/products/${product?.media?.at(0)}`}
                slug={product.slug}
                description={product.description}
                price={product.price}
              >
                Schalter
              </ProductComponent>
            );
          })}
        </div>

        {viewAll && (
          <Button
            to={`/collection/${category.slug}`}
            style={{ boxShadow: "0px 0px 15px 1px rgba(0,0,0,.4)" }}
            type="categories"
            extraClasses="md:hidden"
          >
            View All
          </Button>
        )}
      </div>
    </div>
  );
}
