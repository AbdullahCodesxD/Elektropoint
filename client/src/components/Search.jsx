import { useState } from "react";
import Button from "./Button";
import { SearchSvg } from "./Svgs";
import { useNavigate } from "react-router";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  }
  return (
    <form onSubmit={handleSubmit} className="bg-main p-2 relative">
      <input
        className="bg-white outline-none border-none  w-full rounded-md py-1.5 px-3 text-[14px] pr-[40px]"
        type="text"
        placeholder="Search for products and categories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button extraClasses="absolute right-[20px] top-1/2 -translate-y-1/2">
        <SearchSvg height={20} width={20} />
      </Button>
    </form>
  );
}
