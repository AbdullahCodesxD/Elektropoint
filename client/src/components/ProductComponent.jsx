import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { useState } from "react";

export default function ProductComponent({
  slug,
  price,
  src,
  children,
  description = "",
}) {
  const [isSwiping, setIsSwiping] = useState(false);
  let startX = 0;

  const handleStart = (x) => {
    startX = x;
    setIsSwiping(false);
  };

  const handleMove = (x) => {
    if (Math.abs(startX - x) > 10) {
      setIsSwiping(true);
    }
  };

  const handleClick = (e) => {
    if (isSwiping) {
      e.preventDefault(); // Prevent navigation if swiping
    }
  };

  return (
    <div className="p-2">
      <Link
        to={`/product/${slug}`}
        className="p-[20px] w-full cursor-pointer"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onClick={handleClick}
      >
        <img
          className="h-[220px] w-full object-cover object-top border border-black rounded-[15px]"
          src={src}
          alt={`An image of ${children}`}
        />
        <h4 className="capitalize text-base font-semibold mt-4">
          {children.toLowerCase()}
        </h4>
        <p
          className="text-[14px] line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description),
          }}
        />
        <h5 className="capitalize font-semibold">Price : ${price}</h5>
      </Link>
    </div>
  );
}
