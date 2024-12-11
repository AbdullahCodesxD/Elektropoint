import { ArrowSvg } from "../../components/Svgs";

export default function CollectionDesktopTypes() {
  return (
    <div className="bg-white hidden md:block p-3">
      <h4 className="pb-1 border-b border-black text-lg font-medium">
        Marketing Materials
      </h4>

      <div>
        <CollectionDesktopTypeComponent>
          Marketing
        </CollectionDesktopTypeComponent>
        <CollectionDesktopTypeComponent>
          Materials
        </CollectionDesktopTypeComponent>
        <CollectionDesktopTypeComponent>Haha</CollectionDesktopTypeComponent>
      </div>
    </div>
  );
}

function CollectionDesktopTypeComponent({ children }) {
  return (
    <div className="flex items-center justify-between cursor-pointer">
      <h4 className="text-[15px] py-1.5">{children}</h4>

      <ArrowSvg height={12} />
    </div>
  );
}
