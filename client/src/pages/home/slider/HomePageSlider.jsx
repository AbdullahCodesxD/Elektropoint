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

  const dummyData = [
    {
      heading: "LIT by Cardi",
      p: "Lights for everyday life-now exclusively and in action at sanepar",
    },
    {
      heading: "SANEPAR E-Mobility summer campaign",
      p: `Get ready for the future of e-mobility. Discover our
product and solutions`,
    },
    {
      heading: `Excel Networking Solutions`,
      p: "Exclusively at sonepar",
    },
    {
      heading: `Versatile-OBO G-mesh trays`,
      p: `Quick assembly, flexibility and for electrical functional integrity E30-E90`,
    },
  ];
  return (
    <Slider
      className="slider md:min-w-full min-h-full bg-white mb-auto"
      {...settings}
    >
      {dummyData.map((data, i) => (
        <div className="h-[420px] md:h-[520px] relative" key={i} to="#">
          <div className="absolute bottom-0 lg:bottom-5 lg:left-5 lg:w-[95%] w-full bg-white p-5">
            <h4 className="font-semibold lg:text-4xl text-xl">
              {data.heading}
            </h4>
            <p className="text-lg mt-2">{data.p}</p>
          </div>
          <img
            className="h-[300px] md:h-full w-full object-cover object-top"
            src={`/slider${i + 1}.png`}
            alt="slider"
          />
        </div>
      ))}
    </Slider>
  );
}
