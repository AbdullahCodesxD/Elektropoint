import HamburgerAndProfile from "./HamburgerAndProfile";
import { useState } from "react";
import NavbarLinksComponent from "./NavbarLinksComponent";
import Search from "./Search";
import Button from "./Button";

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }
  return (
    <nav>
      <div
        className="flex  items-center justify-between gap-2 p-3 md:p-0 bg-white h-[100px] md:h-fit md:grid md:pl-2 md:fixed md:w-full md:top-0 z-[6900000]"
        style={{
          gridTemplateColumns: "336px 1fr",
        }}
      >
        <Button
          handler={() => {
            setIsHamburgerOpen(false);
          }}
          to="/"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="max-w-[220px] object-contain object-left"
          />
        </Button>
        <HamburgerAndProfile
          isOpen={isHamburgerOpen}
          toggleHamburger={toggleHamburger}
        />
      </div>

      <div className="md:hidden">
        <Search />
      </div>
      <NavbarLinksComponent
        isOpen={isHamburgerOpen}
        toggleHamburger={toggleHamburger}
      />
    </nav>
  );
}
