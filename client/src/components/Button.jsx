import { Link } from "react-router-dom";

/**
 * @function Button
 * @description A button component with different types and styles
 * @param {React.ReactNode} children - The content of the button
 * @param {Function} [handler=() => {}] - The function to be called on click
 * @param {string} [to] - If provided, the component will be a Link from react-router-dom
 * @param {string} [type=""] - The type of the button (primary, secondary, navbarHeader, navbarLink)
 * @param {string} [extraClasses] - Additional class names to be applied to the button
 * @param {object} [style] - Additional styles to be applied to the button
 * @returns {React.ReactElement} - A button element
 */
export default function Button({
  children,
  handler = () => {},
  to,
  type = "",
  extraClasses = "",
  style = {},
  buttonType = "",
}) {
  const btnTypes = {
    primary:
      "bg-main block text-center p-3 rounded-md  w-full font-semibold cursor-pointer",
    secondary: "bg-white text-main border border-main",

    // HomePageStuff
    sliderComponent:
      "bg-main text-black flex items-center justify-between w-full p-3 text-[24px] text-[#222] font-semibold md:min-w-full",
    categories:
      "px-7 py-2.5 bg-main text-black font-semibold text-[16px] rounded-md block mx-auto mt-10 md:mt-0 text-center",
    homePageDesktop:
      "flex items-center gap-2 capitalize p-3 pl-5 transition-all hover:bg-main hover:text-white",
    slider: "text-white border-b border-white w-fit font-semibold text-[17px]",

    //Collection page
    collectionHeader:
      "block w-fit capitalize px-4 py-1.5 transition-all hover:opacity-50",
    collectionSvg: "p-1 cursor-pointer bg-main rounded-md",

    //Product Page
    productBtn:
      "font-medium px-5 text-[14px] py-2 flex items-center justify-center gap-3 border rounded-lg border-[#222]",
    productCustomization:
      "w-full aspect-[3/2] border-[0.5px] border-main border-collapse flex items-center justify-center",
    productDesktop: "text-xl font-medium w-full p-2 border-b border-black",
    // Cart
    checkout:
      "bg-main text-center w-full py-1.5 px-3 font-medium text-dark rounded-md text-base transition-all hover:opacity-50",
    cartBtns: "p-1 px-2",

    // Checkout
    checkoutStatus: "flex items-center gap-2 text-[26px] font-semibold",
    // Footer buttons
    footerButton:
      "text-black h-[40px] font-semibold text-[17px] aspect-square flex items-center justify-center",
    // NavbarStuff
    navbarHeader: `py-1 uppercase px-3 w-full text-main font-semibold text-[24px] transition-all cursor-pointer md:h-1/2 md:border-none md:flex md:flex-start`,
    navbarLink:
      "link py-[6px] w-full pr-2 flex items-center justify-between uppercase cursor-pointer transition-all  hover:bg-main hover:text-[#444]",
    desktopNavBar:
      "w-[20%] link flex flex-start  py-2 capitalize border-b-2 border-black min-h-full  text-left transition-all hover:bg-main hover:text-white px-3",
    navbarFooter:
      "h-[30px] font-semibold mx-0.5 flex items-center justify-center  uppercase  aspect-square text-main",

    // Dashboard
    dasboardNavigation:
      "flex items-center gap-2 w-full rounded-lg block py-3 px-5 font-semibold text-lg transition-all hover:opacity-80 hover:bg-white",
    orderHeader:
      "text-dark px-3 py-1.5 font-medium rounded-lg transition-all hover:bg-main",
    orderDetailsOrder:
      "flex gap-1.5 items-center  bg-main rounded-md px-5 py-1 text-[15px] font-medium",
    subLinks:
      "w-[80%] ml-auto py-2  block font-medium transition-all hover:text-main",
    productsBtn: "py-1 rounded-lg h-fit mx-auto my-auto px-4  bg-main w-fit",
  };

  if (to)
    return (
      <Link
        className={`${btnTypes[type]} ${extraClasses}`}
        style={style}
        to={to}
        onClick={handler}
      >
        {children}
      </Link>
    );

  return (
    <button
      type={buttonType}
      className={`${btnTypes[type]} ${extraClasses}`}
      onClick={handler}
      style={style}
    >
      {children}
    </button>
  );
}
