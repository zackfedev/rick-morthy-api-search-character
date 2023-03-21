import { useState, useContext, useEffect } from "react";
import { CharContext } from "../context/CharContext";

const useSearch = (searchTerm) => {
  const [searchResult, setSearchResult] = useState([]);
  const { char } = useContext(CharContext);

  useEffect(() => {
    const resultChar = char.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchTerm.length === 0) {
      setSearchResult(char);
    } else {
      setSearchResult(resultChar);
    }
  }, [char, searchTerm]);

  return searchResult;
};

export default useSearch;
