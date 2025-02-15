import { CartSvg, CrossSvg, HamburgerSvg, ProfileSvg } from "./Svgs";
import Button from "./Button";
import Search from "./Search";

import Cookies from "js-cookie";
import { useSelector } from "react-redux";
export default function HamburgerAndProfile({ isOpen, toggleHamburger }) {
  const jwt = Cookies.get("jwt");
  const cart = useSelector((state) => state.cart);
  return (
    <div className="flex md:flex-row-reverse  gap-5 items-center justify-center md:w-full md:bg-main md:h-[70px] px-5">
      {/* <Button
        to={`${jwt ? "/dashboard" : "/login"}`}
        extraClasses="hidden md:block"
      >
        <ProfileSvg width={30} height={30} color="white" />
      </Button>
      <Button to={`${jwt ? "/dashboard" : "/login"}`} extraClasses="md:hidden">
        <ProfileSvg width={30} height={30} />
      </Button> */}
      <Button to={`/cart`} extraClasses="hidden relative md:block h-fit">
        {/* {cart.noOfProducts > 0 && (
          <span className="absolute top-0 right-0 translate-x-1/2 rounded-full h-3 aspect-square bg-red"></span>
        )} */}
        <CartSvg width={30} height={30} color="white" />
      </Button>
      <Button to={`/cart`} extraClasses="md:hidden">
        <CartSvg width={30} height={30} />
      </Button>

      <div className="hidden md:block w-full ">
        <Search />
      </div>
      <Button extraClasses="md:hidden" handler={toggleHamburger}>
        {isOpen ? (
          <CrossSvg width={34} height={32} />
        ) : (
          <HamburgerSvg width={34} height={28} />
        )}
      </Button>
      <Button extraClasses="hidden md:block" handler={toggleHamburger}>
        {isOpen ? (
          <CrossSvg color="white" width={34} height={32} />
        ) : (
          <HamburgerSvg color="white" width={34} height={28} />
        )}
      </Button>
    </div>
  );
}
