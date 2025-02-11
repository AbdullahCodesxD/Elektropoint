import { useSelector } from "react-redux";
import Button from "../../components/Button";
import links from "../../utils/navbarLinks";

const API = import.meta.env.VITE_API;
export default function DesktopLinks() {
  const collections = useSelector((state) => state.collections);

  return (
    <div className="min-w-[350px] bg-white hidden md:block">
      {collections.map(
        (link, i) =>
          i < 12 && (
            <Button
              to={`/collection/${link.slug}`}
              type="homePageDesktop"
              key={link._id}
            >
              <img
                className="h-[30px] w-[30px] object-contain"
                src={`${API}/categories/${link.media?.at(0)}`}
                alt="gg"
              />
              {link.title}
            </Button>
          )
      )}
    </div>
  );
}
