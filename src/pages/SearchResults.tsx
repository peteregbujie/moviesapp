
'use client'

import { useSearchParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import MovieGrid from "../components/movies/MovieGrid";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const { data, isLoading, error } = useSearch(query);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">
          <h2 className="text-xl font-bold mb-2">Error loading search results</h2>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">
        Search Results for "{query}"
      </h1>

      {!data?.results?.length ? (
        <p className="text-gray-500">No results found for "{query}"</p>
      ) : (
        <MovieGrid movies={data.results} />
      )}
    </div>
  );
}
