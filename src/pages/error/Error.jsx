import { useNavigate, useRouteError } from "react-router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export default function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  function goBack(e) {
    e.preventDefault();
    navigate(-1);
  }
  return (
    <div>
      <Navbar />
      <div className="h-[50vh] p-4 flex flex-col gap-3 items-center justify-center ">
        <p className="text-red text-[30px] font-semibold">
          {error.statusText === "Not Found" && "404 No page found :( "}
        </p>

        <Button
          extraClasses="bg-red px-5 py-2  rounded-md mt-3 text-white"
          handler={goBack}
        >
          Go Back
        </Button>
      </div>
      <Footer />
    </div>
  );
}
