import CreatedTaxes from "./CreatedTaxes";

export default function Taxes() {
  return (
    <div className="bg-[#EBEBEB] px-5 rounded-lg py-4 min-h-[80vh] md:min-h-[initial]">
      <div className="max-w-screen-lg">
        <h3 className="font-semibold text-xl">Taxes and duties</h3>

        <CreatedTaxes />
      </div>
    </div>
  );
}
