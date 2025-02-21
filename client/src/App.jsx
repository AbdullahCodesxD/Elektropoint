import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "./layout/Layout";
import Error from "./pages/error/Error";

import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/home/Home";
import Collection from "./pages/collection/Collection";
import Product from "./pages/product/Product";
import ProductSelect from "./pages/productSelect/ProductSelect";
import ProductSelectCategories from "./pages/productSelectCategories/ProductSelectCategories";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import OrderComplete from "./pages/orderComplete/OrderComplete";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/dashboard/Orders/Orders";
import OrdersDetails from "./components/OrdersDetails";
import OrdersDraft from "./pages/dashboard/Orders/OrdersDraft";
import Products from "./pages/dashboard/Products/Products";
import Customers from "./pages/dashboard/Customers/Customers";
import CustomerDetails from "./components/CustomerDetails";
import Settings from "./pages/dashboard/Settings/Settings";
import UsersAndPermissions from "./pages/dashboard/Settings/UsersAndPermissions/UsersAndPermissions";
import ShippingAndDelivery from "./pages/dashboard/Settings/ShippingAndDelivery/ShippingAndDelivery";
import Taxes from "./pages/dashboard/Settings/Taxes/Taxes";
import TaxesCountryComponent from "./components/TaxesCountryComponent";
import AddProduct from "./pages/dashboard/AddProduct/AddProduct";
import Collections from "./pages/dashboard/Products/Collections/Collections";
import CreateCollection from "./pages/dashboard/Products/Collections/CreateCollection/CreateCollection";
import Discount from "./pages/dashboard/Discount/Discount";
import CreateCustomer from "./pages/dashboard/CreateCustomer/CreateCustomer";
import NewOrder from "./pages/dashboard/Orders/NewOrder";
import ProductPage from "./pages/dashboard/Product/ProductPage";
import CreateDiscount from "./pages/dashboard/CreateDiscount/CreateDiscount";
import ShippingNew from "./pages/dashboard/Settings/ShippingNew/ShippingNew";
import NewStore from "./pages/dashboard/Settings/NewStore/NewStore";
import UsersAndPermissionsNew from "./pages/dashboard/Settings/UsersAndPermissionsNew/UsersAndPermissionsNew";
import SearchResults from "./pages/searchResults/SearchResults";
import Login from "./pages/login/Login";
import CollectionPage from "./pages/dashboard/Products/Collections/Collection/CollectionPage";
import AdminHome from "./pages/dashboard/Home/AdminHome";

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/search/:search",
        element: <SearchResults />,
      },
      {
        path: "/collection/:collection",
        element: <Collection />,
      },
      // {
      //   path: "/product/:collection/:product",
      //   element: <Product />,
      // },
      {
        path: "/product/:product",
        element: <Product />,
      },
      {
        path: "/product/select/:product",
        element: <ProductSelectCategories />,
      },
      {
        path: "/product/select/:product/:category",
        element: <ProductSelect />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order-complete",
        element: <OrderComplete />,
      },

      // DASHBOARD,
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          // Orders
          {
            path: "/dashboard/",
            element: <AdminHome />,
          },
          {
            path: "/dashboard/orders",
            element: <Orders />,
          },
          {
            path: "/dashboard/orders/order/:order",
            element: <OrdersDetails />,
          },
          {
            path: "/dashboard/orders/draft",
            element: <OrdersDraft />,
          },
          {
            path: "/dashboard/orders/draft/new",
            element: <NewOrder />,
          },
          // Products
          {
            path: "/dashboard/products",
            element: <Products />,
          },
          {
            path: "/dashboard/products/product/:product",
            element: <ProductPage />,
          },
          {
            path: "/dashboard/products/new",
            element: <AddProduct />,
          },

          {
            path: "/dashboard/products/collections",
            element: <Collections />,
          },
          // {
          //   path: "/dashboard/products/collections/collection/:collection",
          //   element: <CollectionPage />,
          // },
          {
            path: "/dashboard/products/collections/new",
            element: <CreateCollection />,
          },
          // Customers
          {
            path: "/dashboard/customers",
            element: <Customers />,
          },
          {
            path: "/dashboard/customers/new",
            element: <CreateCustomer />,
          },
          {
            path: "/dashboard/customers/customer/:customer",
            element: <CustomerDetails />,
          },

          // Discount
          {
            path: "/dashboard/discount",
            element: <Discount />,
          },
          {
            path: "/dashboard/discount/new",
            element: <CreateDiscount />,
          },

          // //analytics
          // {
          //   path: "/dashboard/analytics",
          //   element: (
          //     <p className="bg-white p-5 m-3 text-center font-semibold">
          //       No Data Yet
          //     </p>
          //   ),
          // },
          // Settings
          {
            path: "/dashboard/settings",
            element: <Settings />,
          },
          {
            path: "/dashboard/settings/general",
            element: <Settings />,
          },
          // {
          //   path: "/dashboard/settings/general/new",
          //   element: <NewStore />,
          // },
          {
            path: "/dashboard/settings/users",
            element: <UsersAndPermissions />,
          },
          {
            path: "/dashboard/settings/users/new",
            element: <UsersAndPermissionsNew />,
          },
          {
            path: "/dashboard/settings/shipping",
            element: <ShippingAndDelivery />,
          },
          {
            path: "/dashboard/settings/shipping/new",
            element: <ShippingNew />,
          },

          // {
          //   path: "/dashboard/settings/taxes",
          //   element: <Taxes />,
          // },
          // {
          //   path: "/dashboard/settings/taxes/:country",
          //   element: <TaxesCountryComponent />,
          // },
        ],
      },
    ],

    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
