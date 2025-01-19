import Button from "../../../components/Button";
import { DotsSvg } from "../../../components/Svgs";

export default function StoreDefaults() {
  return (
    <div className="bg-white rounded-lg p-3 mt-4">
      <h3 className="font-semibold">Store Defaults</h3>

      <div className="mt-4 border-2 border-black/10 rounded-lg flex items-center justify-between gap-3 py-3 px-5">
        <p className="text-[15px] text-black leading-[1.5]">
          Currency Display <br />
          <span className="text-black/50 text-[14px]">
            To manage the currencies customers see, go to market
          </span>
        </p>

        <div className="flex items-center gap-7">
          <p className="text-[15px] text-black/70">Dollar</p>
          <Button>
            <DotsSvg height={5} />
          </Button>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-5">
        <div className="w-full">
          <h3 className="font-semibold mb-1">Unit system</h3>

          <select className="w-full py-2.5 cursor-pointer outline-none px-2 border-2 border-dark/10 rounded-md">
            <option>Metric System</option>
          </select>
        </div>
        <div className="w-full">
          <h3 className="font-semibold mb-1">Default weight in</h3>

          <select className="w-full py-2.5 cursor-pointer outline-none px-2 border-2 border-dark/10 rounded-md">
            <option>Killogram (kg)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
