import { useState, useContext, useMemo } from "react";
import { CharContext } from "../context/CharContext";

const useSearch = (searchTerm) => {
  const [searchResult, setSearchResult] = useState([]);
  const char = useContext(CharContext);

  const searchFilter = useMemo(() => {
    const filtered = char?.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResult(filtered);
  }, [searchTerm, char]);

  return searchResult;
};

export default useSearch;
