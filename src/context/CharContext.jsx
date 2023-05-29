import { Pagination } from "@mui/material";
import { createContext, useState, useEffect, useMemo } from "react";

export const CharContext = createContext([]);

export const CharProvider = ({ children }) => {
  const [char, setChar] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1`);
    const data = await response.json();

    setChar(data.results);
  };

  useEffect(() => {
    getCharacter();
  }, [page]);

  const setCurrentPages = (p) => {
    setPage(p);
  };

  return (
    <CharContext.Provider value={{ char, setCurrentPages, page }}>{children}</CharContext.Provider>
  );
};
