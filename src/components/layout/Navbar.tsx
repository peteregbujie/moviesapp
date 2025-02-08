
'use client'
import { useDebouncedCallback } from 'use-debounce';
import SearchInput from '../common/SearchInput';
import { useMovieParams } from '../../hooks/useMovieParams';

export default function Navbar() {
  const { search, setSearch, isPending } = useMovieParams();

  const handleSearch = useDebouncedCallback(
    (search: string) => {
      setSearch(search);
    },
    250
  )

 return (
   <nav className="bg-white shadow">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex items-center justify-between h-16">
         <div className="flex-shrink-0">
           <span className="text-xl font-bold text-gray-800">Logo</span>
         </div>
         
         <div className="flex-1 flex items-center justify-center px-6">
           <SearchInput  value={search} handleSearch={handleSearch} isPending={isPending} />
         </div>
         
         <div className="flex items-center space-x-4">
           <button className="text-gray-600 hover:text-gray-800">
             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
               />
             </svg>
           </button>
           <button className="text-gray-600 hover:text-gray-800">
             <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth={2}
                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
               />
             </svg>
           </button>
         </div>
       </div>
     </div>
   </nav>
 );
};

