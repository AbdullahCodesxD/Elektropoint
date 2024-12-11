import Button from "../../components/Button";

export default function SliderSideComponentsDesktop() {
  return (
    <div className="hidden md:flex flex-col min-w-full h-[99%]">
      <SliderSideComponentDesktop type="red" heading="Light Highlights August">
        Discover our lighting highlights of the month!
      </SliderSideComponentDesktop>
      <SliderSideComponentDesktop type="blue" heading="Light Highlights August">
        test the tool managment system sonepar toolSET for 30 days free of
        charge and see for yourself!
      </SliderSideComponentDesktop>
    </div>
  );
}

function SliderSideComponentDesktop({ heading, children, type }) {
  const styleType = {
    blue: "bg-blue ",
    red: "bg-red",
  };
  return (
    <div
      className={`h-full flex flex-col justify-center gap-2 px-4 ${styleType[type]}`}
    >
      <h3 className="text-white font-semibold text-2xl">{heading}</h3>
      <p className="text-white text-[15px] first-letter:capitalize">
        {children}
      </p>

      <Button type="slider">Learn More</Button>
    </div>
  );
}
