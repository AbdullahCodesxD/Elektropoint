export default function StoreOwner() {
  return (
    <div className="bg-white p-4 rounded-xl w-full mt-4">
      <h4 className="font-semibold text-base mb-2">Store Owner</h4>

      <div className="flex items-center gap-2">
        <img
          className="w-[70px] aspect-square object-cover rounded-md"
          src="/slider1.png"
          alt="Image of the user"
        />

        <p className="font-semibold leading-[1.1]">
          Abdullah <br />
          <span className="font-normal text-[14px] text-black/70">
            Last login was monday, 24 september 2024 9:08am GMT+5
          </span>
        </p>
      </div>
    </div>
  );
}
