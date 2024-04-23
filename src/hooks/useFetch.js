import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
        setLoading(false);
      } catch (error) {
        setResponse(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { response, loading, error };
};

export default useFetch;
