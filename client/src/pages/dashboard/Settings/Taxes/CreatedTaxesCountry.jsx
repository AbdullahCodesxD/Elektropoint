import { Link } from "react-router-dom";

export default function CreatedTaxesCountry({ country, tax, src }) {
  return (
    <Link
      to={`/dashboard/settings/taxes/${country}`}
      className="grid grid-cols-2 gap-5 py-2 px-7 border-t border-dark/30"
    >
      <div className="flex items-center gap-2">
        <img
          className="h-[30px] object-contain"
          src={src}
          alt={`Flag of ${country}.`}
        />
        <p className="text-[15px] capitalize">{country}</p>
      </div>

      {tax > 0 && <p className="text-[14px] text-center">{tax}</p>}

      {!tax && (
        <p className="mx-auto my-auto bg-dark/50 w-[30px] h-[2.5px]"></p>
      )}
    </Link>
  );
}
