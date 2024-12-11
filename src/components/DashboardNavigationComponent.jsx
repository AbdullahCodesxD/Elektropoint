import { useLocation } from "react-router";
import Button from "./Button";

export default function DashboardNavigationComponent({
  svg,
  children,
  to,
  active,
  subLinks,
}) {
  const location = useLocation().pathname;

  return (
    <div className="flex flex-col-reverse md:block">
      <Button
        extraClasses={active && "bg-white text-main"}
        type="dasboardNavigation"
        to={to}
      >
        {svg}
        {children}
      </Button>

      {subLinks && active && (
        <div className="max-h-[70px] overflow-y-auto md:max-h-[initial]">
          {Object.keys(subLinks).map((subLink) => (
            <Button
              extraClasses={
                location.startsWith(subLinks[subLink]) &&
                "text-[#99D913] font-semibold"
              }
              type="subLinks"
              to={subLinks[subLink]}
              key={subLink}
            >
              {subLink}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}
