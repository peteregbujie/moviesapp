import { LoaderCircle } from 'lucide-react';


interface SearchInputProps {
 value: string;
 handleSearch: (search: string) => void;
 isPending: boolean;
}

function SearchInput({ value, handleSearch, isPending }: SearchInputProps) {
 return (
  <div className="relative">
    <input
      type="text"
      value={value}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search movies..."
      className="w-full p-2 border rounded-lg text-black"
    />
    {isPending && (
      <div className="absolute right-2 top-2">
        <LoaderCircle />
      </div>
    )}
  </div>
);
}

export default SearchInput