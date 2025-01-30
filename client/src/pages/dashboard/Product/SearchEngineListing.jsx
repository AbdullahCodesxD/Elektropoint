export default function SearchEngineListing({
  setMetaTitle,
  metaTitle,
  currentTitle = "",
  setMetaDescription,
  metaDescription,
  currentDescription = "",
}) {
  return (
    <div className="py-3 px-5 bg-white rounded-lg">
      <h3 className="font-semibold text-lg">Search engine listing</h3>
      <p className="text-[15px] text-dark/70 mb-3">
        Add a description to see how this product might appear in a search
        engine listing
      </p>

      <div className="mt-2">
        <label className="font-medium" htmlFor="title">
          Page title
        </label>
        <input
          type="text"
          id="title"
          onChange={(e) => setMetaTitle(e.target.value)}
          value={metaTitle}
          minLength={3}
          maxLength={70}
          placeholder={currentTitle}
          className="px-3 mt-0.5 py-2 rounded-md outline-none border border-dark w-full "
        />
        <p className="text-[14px] text-dark/70 mt-1">3 to 70 characters used</p>
      </div>

      <div className="mt-3">
        <label className="font-medium" htmlFor="description">
          Meta Description
        </label>
        <textarea
          minLength={3}
          maxLength={350}
          onChange={(e) => setMetaDescription(e.target.value)}
          value={metaDescription}
          placeholder={currentDescription}
          id="description"
          className="h-[150px] resize-none px-3 mt-0.5 py-2 rounded-md outline-none border border-dark w-full "
        />
        <p className="text-[14px] text-dark/70">3 to 350 characters used</p>
      </div>
    </div>
  );
}
