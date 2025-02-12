import { useLocation } from "react-router";
import DashboardNavigationComponent from "../../components/DashboardNavigationComponent";
import {
  AnalyticsSvg,
  CartSvg,
  CustomerSvg,
  DiscountSvg,
  HomeSvg,
  ProductSvg,
  SettingsSvg,
} from "../../components/Svgs";

export default function DashboardNavigation() {
  const location = useLocation().pathname.split("/")[2];
  return (
    <div className="fixed py-2 md:py-0 z-[2] bottom-0 left-0 w-full h-fit border-t-2 border-dark/30 md:border-none md:static md:h-full bg-[#EBEBEB] ">
      <div className="p-2 flex overflow-x-auto md:flex-col gap-2.5 dashboard--Navigation ">
        <DashboardNavigationComponent
          to="/dashboard"
          svg={
            <HomeSvg
              height="27"
              width={27}
              color={location === undefined ? "#99D913" : "#222"}
            />
          }
          active={location === undefined}
        >
          Home
        </DashboardNavigationComponent>
        <DashboardNavigationComponent
          to="/dashboard/orders"
          svg={
            <CartSvg
              height="27"
              width={27}
              color={location === "orders" ? "#99D913" : "#222"}
            />
          }
          active={location === "orders"}
          subLinks={{
            Draft: "/dashboard/orders/draft",
          }}
        >
          Order
        </DashboardNavigationComponent>

        <DashboardNavigationComponent
          to="/dashboard/products"
          svg={
            <ProductSvg
              height="27"
              width={27}
              color={location === "products" ? "#99D913" : "#222"}
            />
          }
          active={location === "products"}
          subLinks={{
            Collections: "/dashboard/products/collections",
          }}
        >
          Products
        </DashboardNavigationComponent>

        <DashboardNavigationComponent
          to="/dashboard/customers"
          svg={
            <CustomerSvg
              height="27"
              width={27}
              color={location === "customers" ? "#99D913" : "#222"}
            />
          }
          active={location === "customers"}
        >
          Customers
        </DashboardNavigationComponent>

        <DashboardNavigationComponent
          to="/dashboard/analytics"
          svg={
            <AnalyticsSvg
              height="27"
              width={27}
              color={location === "analytics" ? "#99D913" : "#222"}
            />
          }
          active={location === "analytics"}
        >
          Analytics
        </DashboardNavigationComponent>

        <DashboardNavigationComponent
          to="/dashboard/discount"
          svg={
            <DiscountSvg
              height="27"
              width={27}
              color={location === "discount" ? "#99D913" : "#222"}
            />
          }
          active={location === "discount"}
        >
          Discount
        </DashboardNavigationComponent>

        <DashboardNavigationComponent
          to="/dashboard/settings/general"
          svg={
            <SettingsSvg
              height="27"
              width={27}
              color={location === "settings" ? "#99D913" : "#222"}
            />
          }
          active={location === "settings"}
          subLinks={{
            "General Settings": "/dashboard/settings/general",
            "Users and permissions": "/dashboard/settings/users",
            "Shipping and delivery": "/dashboard/settings/shipping",
            // "Taxes and duties": "/dashboard/settings/taxes",
          }}
        >
          Settings
        </DashboardNavigationComponent>
      </div>
    </div>
  );
}
