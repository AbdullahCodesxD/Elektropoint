import Slider from "react-slick";
import Button from "./Button";
import ProductComponent from "./ProductComponent";
import { ArrowSvg } from "./Svgs";

const API = import.meta.env.VITE_API;

const NextArrow = ({ onClick }) => (
  <button
    className="absolute left-1/2 bottom-0 transform  -translate-x-1/2 ml-7 bg-main text-white p-4 py-3 rounded-lg z-10 shadow-lg"
    onClick={onClick}
  >
    <ArrowSvg height={20} />
    {/* <FaChevronRight size={20} /> */}
  </button>
);
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-1/2 bottom-0 rotate-180 transform -translate-x-1/2 -ml-7 bg-main text-white p-4 py-3 rounded-lg z-10 shadow-lg"
    onClick={onClick}
  >
    <ArrowSvg height={20} />
  </button>
);

export default function CategoriesComponent({
  children,
  viewAll = true,
  category,
}) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    nextArrow: <NextArrow />, // Custom Next Button
    prevArrow: <PrevArrow />, // Custom Prev Button
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
        {/* <div className="flex flex-col md:flex-row gap-5 mt-5">
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
        </div> */}
        <Slider {...settings} className="overflow-hidden pb-14">
          {category.products?.map((product) => {
            return (
              <ProductComponent
                key={product._id}
                src={`${API}/products/${product?.media?.at(0)}`}
                slug={product.slug}
                description={product.description}
                price={product.price}
              >
                {product.title}
              </ProductComponent>
            );
          })}
        </Slider>

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
