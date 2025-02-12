import { useLocation } from "react-router";
import Button from "./Button";
import { LinkedInSvg, YoutubeSvg } from "./Svgs";

export default function Footer() {
  const location = useLocation().pathname.split("/")[1];

  if (location === "dashboard") return null;
  return (
    // <div className="p-5 bg-main md:flex items-center justify-between md:gap-10">
    <div className="p-5 bg-main">
      <p className="text-center ">
        All copyright reserved &copy; {new Date().getFullYear()}
      </p>
      {/* <div className="flex flex-col md:flex-row md:w-full items-center justify-center gap-1.5">
        <Button extraClasses="text-black font-semibold md:px-3 md:border-r-2 border-black">
          Legal Notice
        </Button>
        <Button extraClasses="text-black font-semibold md:px-3 md:border-r-2 border-black">
          Privacy Policy
        </Button>
        <Button extraClasses="text-black font-semibold md:px-3 md:border-r-2 border-black">
          Contact
        </Button>
        <Button extraClasses="text-black font-semibold md:px-3 md:border-r-2 border-black">
          Imprint
        </Button>
        <Button extraClasses="text-black font-semibold">
          Terms and Conditions
        </Button>
      </div>

      <div className="flex items-center justify-between mt-7 md:w-full md:mt-0">
        <div className="flex items-center">
          <Button type="footerButton">EN</Button>
          <Button
            type="footerButton"
            extraClasses="border-l-2 border-r-2 border-black"
          >
            FR
          </Button>
          <Button type="footerButton">IT</Button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button>
            <LinkedInSvg color="black" height={30} width={30} />
          </Button>

          <Button>
            <YoutubeSvg color="black" height={38} width={35} />
          </Button>
        </div>
      </div> */}
    </div>
  );
}
