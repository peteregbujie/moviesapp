import { parseAsString, useQueryState } from "nuqs";
import { useTransition } from "react";



export function useMovieParams() {
 const [isPending, startTransition] = useTransition();

const [search, setSearch] = useQueryState('search',
   parseAsString.withDefault('').withOptions({
       shallow: false,
       clearOnDefault: true,
       history: 'push',
       startTransition
   })
);

return {isPending, search, setSearch };
}