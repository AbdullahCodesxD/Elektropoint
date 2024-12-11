import Button from "../../../components/Button";
import {
  ArrowSvg,
  ComboSvg,
  ConfiguratorSvg,
  HelpSvg,
  LampSvg,
} from "../../../components/Svgs";

export default function SliderCategoriesComponent() {
  return (
    <div className="flex flex-col gap-1.5 md:grid md:grid-cols-2 md:gap-1">
      <Button type="sliderComponent">
        <span className="flex gap-2 items-center ">
          <ComboSvg color="#222" height={30} width={30} /> Combo Tool
        </span>

        <ArrowSvg color="#222" height={25} width={25} />
      </Button>
      <Button type="sliderComponent">
        <span className="flex gap-2 items-center ">
          <ConfiguratorSvg color="#222" height={30} width={30} /> PV
          configurator
        </span>

        <ArrowSvg color="#222" height={25} width={25} />
      </Button>

      <Button type="sliderComponent">
        <span className="flex gap-2 items-center ">
          <LampSvg color="#222" height={30} width={30} /> Lamp Finder
        </span>

        <ArrowSvg color="#222" height={25} width={25} />
      </Button>
      <Button type="sliderComponent">
        <span className="flex gap-2 items-center ">
          <HelpSvg color="#222" height={30} width={30} /> Help Center
        </span>

        <ArrowSvg color="#222" height={25} width={25} />
      </Button>
    </div>
  );
}
