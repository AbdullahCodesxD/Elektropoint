export default function Loader({ height, width, color = "#000" }) {
  return (
    <div className="min-h-[76vh]  flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin"
        version="1.1"
        width={width}
        height={height}
        x="0"
        y="0"
        viewBox="0 0 24 24"
      >
        <g>
          <path
            fill={color}
            d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
            opacity="1"
            data-original={color}
          ></path>
        </g>
      </svg>
    </div>
  );
}
