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

  const dummyData = new Array(6).fill(null);
  return (
    <Slider className="slider md:min-w-full" {...settings}>
      {dummyData.map((data, i) => (
        <Button extraClasses="md:h-[520px]" key={i} to="#">
          <img
            className="h-[300px] md:h-full w-full object-cover object-center"
            src={i % 2 === 0 ? "/slider1.png" : "/slider1.png"}
            alt="slider"
          />
        </Button>
      ))}
    </Slider>
  );
}
