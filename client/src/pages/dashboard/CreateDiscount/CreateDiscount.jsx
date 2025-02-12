import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { useSelector } from "react-redux";
import { getCollections } from "../../../utils/collectionApi";
import { postDiscount } from "../../../utils/discountApi";

export default function CreateDiscount() {
  const currentCollections = useSelector((state) => state.collections);

  const [title, setTitle] = useState("");
  const [percent, setPercent] = useState("");
  const [status, setStatus] = useState("active");
  const [combine, setCombine] = useState(false);
  const [collections, setCollections] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    postDiscount({
      name: title,
      collections,
      percentage: percent,
      status,
      combination: combine,
    });
  }

  useEffect(
    function () {
      if (currentCollections.length === 0) {
        getCollections();
      }
    },
    [currentCollections.length]
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full pb-[140px] md:p-[20px] bg-white rounded-lg shadow-md "
    >
      <div className="max-w-[700px] p-3">
        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="title"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Title
          </label>
          <input
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          />
        </div>

        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="percent"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Percent
          </label>
          <input
            required
            id="percent"
            value={percent}
            onChange={(e) => {
              let value = e.target.value;

              if (!/^\d*$/.test(value)) return;

              const numValue = Number(value);

              if (numValue > 100) value = "100";
              if (value !== "" && numValue < 1) value = "1";

              setPercent(value);
            }}
            onBlur={() => {
              if (!percent) setPercent("1");
            }}
            type="text"
            inputMode="numeric"
            min={1}
            max={100}
            className="w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          />
        </div>
        <div className="mb-1 flex flex-col gap-2">
          <label
            htmlFor="status"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="cursor-pointer w-full max-w-[700px] px-3 py-2.5 rounded-lg outline-none border border-dark/60"
          >
            <option value="active">Active</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        <div className="mb-1 flex flex-col gap-2 border-b pb-2 border-main">
          <label
            htmlFor="collections"
            className="mt-1 pl-0.5 -mb-2 text-base font-medium"
          >
            Apply To
          </label>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 med:grid-cols-3">
            <div className="flex items-center gap-1 transition-all hover:opacity-80">
              <input
                className="h-[20px] accent-main aspect-square cursor-pointer"
                type="checkbox"
                id="all"
                checked={
                  collections.length === currentCollections.length &&
                  collections.length > 0
                }
                onChange={(e) => {
                  e.target.checked
                    ? setCollections(
                        currentCollections.map((collection) => collection._id)
                      )
                    : setCollections([]);
                }}
              />
              <label className="cursor-pointer w-full" htmlFor="all">
                All
              </label>
            </div>
            {currentCollections.map((collection) => {
              return (
                <div
                  className="flex items-center gap-1 w-fit transition-all hover:opacity-80"
                  key={collection._id}
                >
                  <input
                    className="h-[20px] accent-main aspect-square cursor-pointer"
                    type="checkbox"
                    checked={collections.includes(collection._id)}
                    onChange={(e) => {
                      e.target.checked
                        ? setCollections([...collections, collection._id])
                        : setCollections(
                            collections.filter((id) => id !== collection._id)
                          );
                    }}
                    id={collection.title}
                  />
                  <label
                    className="cursor-pointer w-full line-clamp-1"
                    htmlFor={collection.title}
                  >
                    {collection.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-1 mt-2 flex items-center flex-row-reverse justify-center w-fit gap-2">
          <label htmlFor="combine" className="text-base font-medium">
            Set to be combined
          </label>
          <input
            id="combine"
            type="checkbox"
            className="h-[20px] accent-main aspect-square cursor-pointer"
            onChange={(e) => setCombine(e.target.checked)}
          />
        </div>

        <Button extraClasses="ml-auto block w-fit bg-main text-white px-12 py-1.5 rounded-md mt-3  transition-all hover:opacity-80">
          Create
        </Button>
      </div>
    </form>
  );
}
