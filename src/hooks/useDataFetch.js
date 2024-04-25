import { useQuery } from "@tanstack/react-query";

const useDataFetch = (queryKey, url) => {
  const fetchData = () => fetch(url).then((response) => response.json());

  const {
    data: { data } = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: fetchData,
  });

  return { data, isLoading, isError, error };
};

export default useDataFetch;
