import NavbarLinks from "./NavbarLinks";
import NavBarLinksDesktop from "./NavBarLinksDesktop";
import NavbarLinksFooter from "./NavbarLinksFooter";
import NavbarLinksHeader from "./NavbarLinksHeader";

export default function NavbarLinksComponent({
  collections,
  toggleHamburger,
  isOpen,
}) {
  function handle(e) {
    e.preventDefault();
    const target = e.target;
    if (target?.classList?.contains("link")) toggleHamburger();
  }
  return (
    <div
      onClick={handle}
      className={`fixed z-[1000000000] bottom-0 ${
        isOpen ? "left-0" : "-left-full"
      } w-full bg-white border-t border-dotted border-main p-5 navbarLinks transition-all md:flex `}
    >
      <NavbarLinksHeader />
      <div className="flex justify-between flex-col h-[92%] md:w-full md:h-full">
        <div className="md:hidden">
          <NavbarLinks collections={collections} />
        </div>
        <div className="hidden md:block h-full md:mb-2">
          <NavBarLinksDesktop collections={collections} />
        </div>
        <NavbarLinksFooter />
      </div>
    </div>
  );
}
