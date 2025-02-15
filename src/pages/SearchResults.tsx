
'use client'

import { useSearchParams } from "react-router";
 // Assuming you have this component
import { useSearch } from "../hooks/useSearch";
import MovieGrid from "../components/movies/MovieGrid"; // Adjust the path as necessary

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const { data, isLoading, error } = useSearch(query);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-64 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500">Error loading search results</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">
        Search Results for "{query}"
        {data?.total_results && (
          <span className="text-gray-500 text-lg ml-2">
            ({data.total_results} results)
          </span>
        )}
      </h1>

      {data?.results.length === 0 ? (
        <p className="text-gray-500">No results found for "{query}"</p>
      ) : (
        <MovieGrid movies={data?.results || []} />
      )}
    </div>
  );
}