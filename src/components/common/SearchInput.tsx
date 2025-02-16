import { LoaderCircle, ArrowRight } from 'lucide-react';

interface SearchInputProps {
  value: string;
  handleSearch: (search: string) => void;
  isPending: boolean;
}

function SearchInput({ value, handleSearch, isPending }: SearchInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search movies..."
        className="w-full p-2 pr-16 border rounded-lg text-black"
      />
      <div className="absolute right-2 top-2 flex items-center space-x-2">
        {isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <button
            type="submit"
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Submit search"
          >
            <ArrowRight className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchInput
