export default function StoreOwner({ data, border }) {
  return (
    <div
      className={`pb-2 ${border && "border-t border-dotted border-dark/30"}`}
    >
      <h4 className="font-semibold text-base mb-2">Store {data.role}</h4>

      <div className="flex items-center gap-2">
        <div className="h-[50px] w-[50px] bg-dark/10 flex items-center justify-center rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="20"
            height="20"
            x="0"
            y="0"
            viewBox="0 0 48 48"
          >
            <g>
              <path
                d="M25.2 23.6c5.8-.6 10.4-5.5 10.4-11.5C35.6 5.7 30.4.5 24 .5S12.4 5.7 12.4 12.1c0 6 4.5 10.9 10.4 11.5C10.4 24.2.5 33.6.5 45.2v.9l.1 1.4h46.8l.1-1.4v-.9c0-11.5-9.9-21-22.3-21.6zm-9.8-11.5c0-4.7 3.8-8.6 8.6-8.6 4.7 0 8.6 3.9 8.6 8.6s-3.8 8.6-8.6 8.6c-4.7 0-8.6-3.9-8.6-8.6zM3.5 44.5C3.9 34.6 13 26.6 24 26.6s20.1 8 20.5 17.9z"
                fill="#000000"
                opacity="1"
                data-original="#000000"
              ></path>
            </g>
          </svg>
        </div>

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
