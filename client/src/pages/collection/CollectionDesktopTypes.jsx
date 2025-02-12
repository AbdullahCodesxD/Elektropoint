import { useSelector } from "react-redux";
import { ArrowSvg } from "../../components/Svgs";
import Button from "../../components/Button";

export default function CollectionDesktopTypes() {
  const collections = useSelector((state) => state.collections);
  return (
    <div className="bg-white h-fit hidden md:block p-3">
      <h4 className="pb-1 border-b border-black text-lg font-medium">
        Collections
      </h4>

      <div>
        {collections.map((collection) => (
          <CollectionDesktopTypeComponent
            slug={collection.slug}
            key={collection._id}
          >
            {collection.title}
          </CollectionDesktopTypeComponent>
        ))}
      </div>
    </div>
  );
}

function CollectionDesktopTypeComponent({ children, slug }) {
  return (
    <Button
      to={`/collection/${slug}`}
      extraClasses="flex items-center py-1 border-b-2 boder-dark/50 border-dotted justify-between cursor-pointer transition-all hover:text-main"
    >
      <h4 className="text-[15px] py-1.5 capitalize ">
        {children?.toLowerCase() || ""}
      </h4>

      <ArrowSvg height={12} />
    </Button>
  );
}
