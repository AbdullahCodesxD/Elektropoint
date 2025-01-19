export default function CollectionName({ children }) {
  return (
    <h2 className="capitalize py-5 mx-3 leading-[1.4] font-medium text-[30px] border-t-2 border-dark/70 md:border-t-0">
      {children.toLowerCase()}
    </h2>
  );
}
