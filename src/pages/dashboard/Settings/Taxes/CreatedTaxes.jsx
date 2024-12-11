import CreatedTaxesCountry from "./CreatedTaxesCountry";
import CreatedTaxesCountryHeader from "./CreatedTaxesCountryHeader";
import CreatedTaxesSearchbar from "./CreatedTaxesSearchbar";

export default function CreatedTaxes() {
  return (
    <div className="bg-white p-4 rounded-xl w-full mt-3">
      <h4 className="font-semibold text-lg">Regional Settings</h4>
      <p className="text-[14px] mt-1 leading-[1.5]">
        Create a shipping zone in the region(s) you want to collect tax in.
        Than, find the region in this list and select it to manage its tax
        settings. If you’re unsure about where you’re liable, check with a tax
        professional
      </p>

      <div
        className="rounded-lg overflow-hidden mt-3"
        style={{
          boxShadow: "0px 0px 8px rgba(0,0,0,.1)",
        }}
      >
        <CreatedTaxesSearchbar />
        <CreatedTaxesCountryHeader />
        <CreatedTaxesCountry
          src="/countries/pakistan.png"
          country="Pakistan"
          tax={0}
        />
        <CreatedTaxesCountry
          src="/countries/pakistan.png"
          country="Pakistan"
          tax={0}
        />
        <CreatedTaxesCountry
          src="/countries/pakistan.png"
          country="Pakistan"
          tax={0}
        />
      </div>
    </div>
  );
}
