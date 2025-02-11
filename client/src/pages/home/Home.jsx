import { useSelector } from "react-redux";
import CategoriesComponent from "../../components/CategoriesComponent";
import DesktopLinks from "./DesktopLinks";
import HomePageSlider from "./slider/HomePageSlider";
import SliderCategoriesComponent from "./slider/SliderCategoriesComponent";
import SliderSideComponentsDesktop from "./SliderSideComponentsDesktop";
import { useEffect } from "react";
import { getHomePageCollections } from "../../utils/collectionApi";
import Loader from "../../components/Loader";

export default function Home() {
  const collections = useSelector(
    (state) => state.homePageCollections.collections
  );
  const fetched = useSelector((state) => state.homePageCollections.isFetched);
  useEffect(function () {
    if (collections.length === 0) {
      console.log("gwandu </3");
      getHomePageCollections();
    }
  }, []);

  return (
    <div>
      <div className="flex md:pb-5">
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
      </div>

      {!fetched && (
        <Loader classNameHeight="h-[20vh]" height={100} width={100} />
      )}

      {fetched && collections.length > 0 && (
        <>
          <h3 className="px-3 py-5 font-semibold text-[24px] bg-white">
            Product Categories
          </h3>

          {collections.map((collection) => (
            <CategoriesComponent category={collection} key={collection._id}>
              {collection.title}
            </CategoriesComponent>
          ))}
        </>
      )}
    </div>
  );
}
