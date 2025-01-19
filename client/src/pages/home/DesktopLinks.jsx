import Button from "../../components/Button";
import links from "../../utils/navbarLinks";

export default function DesktopLinks() {
  const linkArr = [...links].splice(0, links.length - 2);
  return (
    <div className="min-w-[350px] bg-white hidden md:block">
      {linkArr.map((link) => (
        <Button to="#" type="homePageDesktop" key={link}>
          <img
            className="h-[30px] object-cover"
            src="/desktopHomePage/1.png"
            alt="gg"
          />
          {link}
        </Button>
      ))}
    </div>
  );
}
