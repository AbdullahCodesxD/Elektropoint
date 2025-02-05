import { CrossSvg, HamburgerSvg, ProfileSvg } from "./Svgs";
import Button from "./Button";
import Search from "./Search";

export default function HamburgerAndProfile({ isOpen, toggleHamburger }) {
  return (
    <div className="flex md:flex-row-reverse  gap-5 items-center justify-center md:w-full md:bg-main md:h-[70px] px-5">
      <Button to="/dashboard" extraClasses="hidden md:block">
        <ProfileSvg width={30} height={30} color="white" />
      </Button>
      <Button to="/dashboard" extraClasses="md:hidden">
        <ProfileSvg width={30} height={30} />
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
