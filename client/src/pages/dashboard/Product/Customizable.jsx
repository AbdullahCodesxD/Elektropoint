export default function Customizable({ noOfBoxes, setNoOfBoxes }) {
  const noOfBoxesArr = Array.from({ length: 9 }).fill(null);
  return (
    <div className="py-1 flex items-start gap-2">
      <label className="pl-0.5 text-base font-medium">Select no of boxes</label>

      <div className="flex gap-1">
        {noOfBoxesArr.map((_, i) => {
          return (
            <div className="mt-1" key={i}>
              <input
                onChange={(e) => {
                  console.log(e.target.value);
                  setNoOfBoxes(Number(e.target.value));
                }}
                value={i + 1}
                name="noOfBoxes"
                className="h-5 w-5 appearance-none bg-transparent relative z-[2] border-2 rounded-full cursor-pointer checked:appearance-auto"
                type="radio"
              />
              {noOfBoxes !== i + 1 && (
                <p className="text-center relative z-[1] text-[10px] -mt-6">
                  {i + 1}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
