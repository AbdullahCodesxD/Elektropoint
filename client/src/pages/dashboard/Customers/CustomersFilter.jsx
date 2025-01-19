export default function CustomersFilter() {
  return (
    <div className="flex flex-col md:flex-row bg-white md:items-center md:justify-between gap-5 mt-4 p-4 rounded-md">
      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        <p className="font-medium">4 customers</p>
        <p className="font-medium">100% of your customer base</p>
      </div>

      <select className="outline-none">
        <option defaultValue className="hidden">
          Add Filter
        </option>
        <option>Filter 1</option>
      </select>
    </div>
  );
}
