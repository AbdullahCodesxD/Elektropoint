import links from "../utils/navbarLinks";
import Button from "./Button";

export default function NavBarLinksDesktop({ collections }) {
  return (
    <div className="flex flex-col justify-between min-h-full ">
      <div>
        <h2 className="w-full text-main pb border-b-main border-b-4 text-2xl font-semibold">
          Range
        </h2>
        <div className="flex flex-wrap">
          {collections.map((link) => (
            <Button
              to={`/collection/${link.slug}`}
              key={link._id}
              type="desktopNavBar"
            >
              {link.title}
            </Button>
          ))}
        </div>
      </div>

      {/* <div>
        <h2 className="w-[240px] text-main pb border-b-main border-b-4 text-2xl font-semibold">
          Pursue
        </h2>
        <div className="flex flex-col flex-wrap">
          {links.map(
            (link, i) =>
              i < 5 && (
                <Button
                  to={`/collection/${link.toLowerCase()}`}
                  key={link}
                  type="desktopNavBar"
                  extraClasses="w-[240px]"
                >
                  {link}
                </Button>
              )
          )}
        </div>
      </div> */}
    </div>
  );
}
