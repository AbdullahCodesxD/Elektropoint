import Slider from "react-slick";
import Button from "../../../components/Button";

export default function HomePageSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const dummyData = new Array(4).fill(null);
  return (
    <Slider
      className="slider md:min-w-full min-h-full bg-white mb-auto"
      {...settings}
    >
      {dummyData.map((data, i) => (
        <Button extraClasses="md:h-[520px]" key={i} to="#">
          <img
            className="h-[300px] md:h-full w-full object-cover object-top"
            src={`/slider${i + 1}.png`}
            alt="slider"
          />
        </Button>
      ))}
    </Slider>
  );
}
