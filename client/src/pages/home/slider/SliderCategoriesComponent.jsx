import Button from "../../../components/Button";
import {
  ArrowSvg,
  ComboSvg,
  ConfiguratorSvg,
  HelpSvg,
  LampSvg,
} from "../../../components/Svgs";

export default function SliderCategoriesComponent({ categories = [] }) {
  const Svgs = [
    <ComboSvg color="#222" key="1" height={30} width={30} />,
    <ConfiguratorSvg color="#222" key="2" height={30} width={30} />,
    <HelpSvg color="#222" key="3" height={30} width={30} />,
    <LampSvg color="#222" key="4" height={30} width={30} />,
  ];
  return (
    <div className="flex flex-col gap-1.5 md:grid md:grid-cols-2 md:gap-1">
      {categories.map((category, i) => {
        return (
          <Button
            key={category._id}
            to={`/collection/${category.slug}`}
            type="sliderComponent"
          >
            <span className="flex gap-2 items-center capitalize ">
              {/* <ComboSvg color="#222" height={30} width={30} /> */}
              {Svgs[i]}
              {category.title?.toLowerCase()}
            </span>

            <ArrowSvg color="#222" height={25} width={25} />
          </Button>
        );
      })}
    </div>
  );
}
