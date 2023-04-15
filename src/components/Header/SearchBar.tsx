import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <div className="relative">
      <div className="absolute top-2 left-2">
        <MagnifyingGlassIcon className="h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
      />
    </div>
  );
}

export default SearchBar;
