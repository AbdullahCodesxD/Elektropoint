import Button from "./Button";
import ProductComponent from "./ProductComponent";

export default function CategoriesComponent({ children, viewAll = true }) {
  return (
    <div className="px-3 py-5 border-t border-black bg-white">
      <div className="md:flex items-center justify-between  w-full">
        <h3 className="font-semibold text-[18px] uppercase">{children}</h3>

        {viewAll && (
          <Button
            to="#"
            style={{ boxShadow: "0px 0px 15px 1px rgba(0,0,0,.4)" }}
            type="categories"
            extraClasses="hidden md:block ml-0 mr-0 mt-0"
          >
            View All
          </Button>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ProductComponent src="/product.png" price="200">
          Schalter
        </ProductComponent>
        <ProductComponent src="/product2.png" price="200">
          Schalter
        </ProductComponent>

        <ProductComponent src="/product2.png" price="200">
          Schalter
        </ProductComponent>
        <ProductComponent src="/product2.png" price="200">
          Schalter
        </ProductComponent>
      </div>

      {viewAll && (
        <Button
          to="#"
          style={{ boxShadow: "0px 0px 15px 1px rgba(0,0,0,.4)" }}
          type="categories"
          extraClasses="md:hidden"
        >
          View All
        </Button>
      )}
    </div>
  );
}
