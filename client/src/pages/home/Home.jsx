import CategoriesComponent from "../../components/CategoriesComponent";
import DesktopLinks from "./DesktopLinks";
import HomePageSlider from "./slider/HomePageSlider";
import SliderCategoriesComponent from "./slider/SliderCategoriesComponent";
import SliderSideComponentsDesktop from "./SliderSideComponentsDesktop";

export default function Home() {
  return (
    <div>
      {/* <div className="flex md:pb-5">
        <DesktopLinks />
        <div className="w-full custom ">
          <div
            className="md:grid w-full custom-for-slider "
            style={{
              gridTemplateColumns: "1fr 400px",
            }}
          >
            <HomePageSlider />
            <SliderSideComponentsDesktop />
          </div>
          <SliderCategoriesComponent />
        </div>
      </div> */}
      <div className="flex md:pb-5">
        {/* <DesktopLinks /> */}
        <div className="w-full">
          <div
            className="md:grid w-full custom-for-slider "
            style={{
              gridTemplateColumns: "1fr 400px",
            }}
          >
            <HomePageSlider />
            <SliderSideComponentsDesktop />
          </div>
          <SliderCategoriesComponent />
        </div>
      </div>

      <h3 className="px-3 py-5 font-semibold text-[24px] bg-white">
        Product Categories
      </h3>

      <CategoriesComponent>Unternerteilung Hager</CategoriesComponent>
      <CategoriesComponent>Unternerteilung ABB</CategoriesComponent>
      <CategoriesComponent>CEE kombinationen</CategoriesComponent>
      <CategoriesComponent>Verteikerschranke</CategoriesComponent>
      <CategoriesComponent>Motorschutzschalter</CategoriesComponent>
      <CategoriesComponent>Schalter</CategoriesComponent>
      <CategoriesComponent>Lassttrennschalter</CategoriesComponent>
      <CategoriesComponent viewAll={false}>Kleinschutze</CategoriesComponent>
    </div>
  );
}
