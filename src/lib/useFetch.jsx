import { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  console.log(url);

  const fetchData = useCallback(async () => {
    setisLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setData(data);
    } catch (e) {
      setError(e.message);
    }

    setisLoading(false);
  });

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
