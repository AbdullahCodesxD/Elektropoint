export default function StoreOwner({ data }) {
  return (
    <div>
      <h4 className="font-semibold text-base mb-2">Store {data.role}</h4>

      <div className="flex items-center gap-2">
        <img
          className="w-[70px] aspect-square object-cover rounded-md"
          src="/slider1.png"
          alt="Image of the user"
        />

        <p className="font-semibold capitalize leading-[1.1]">
          {data.name} <br />
          <span className="font-normal lowercase  text-[14px] text-black/70">
            {data.email}
          </span>
        </p>
      </div>
    </div>
  );
}
