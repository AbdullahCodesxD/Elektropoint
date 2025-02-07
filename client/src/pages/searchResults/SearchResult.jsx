import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
const API = import.meta.env.VITE_API;

export default function SearchResult({ data }) {
  return (
    <Link
      to={`/product/${data.slug}`}
      className="w-full rounded-md overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,.15)] transition-all cursor-pointer hover:shadow-[0px_0px_10px_rgba(0,0,0,.25)]"
    >
      <div className="relative">
        <img
          src={`${API}/products/${data.media?.at(0)}`}
          className="object-cover h-[200px] w-full"
        />
        <div className="absolute top-0 right-0 h-full w-full bg-gradient-to-b from-transparent to-black/50"></div>
      </div>
      <div className="p-3">
        <h4 className="text-lg font-medium">{data.title}</h4>
        <p
          className="line-clamp-1"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.description),
          }}
        />
      </div>
    </Link>
  );
}
