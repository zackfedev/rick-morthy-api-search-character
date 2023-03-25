import { Pagination } from "@mui/material";
import { createContext, useState, useEffect } from "react";

export const CharContext = createContext([]);

export const CharProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [char, setChar] = useState([]);

  const handlePage = (e, value) => {
    setPage(value);
  };

  const getCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();

    setChar(data.results);
  };

  useEffect(() => {
    getCharacter();
  }, [page]);

  const charInfo = {
    char,
    page,
  };

  return (
    <CharContext.Provider value={charInfo}>
      <Pagination
        sx={{ pb: 3 }}
        count={10}
        page={page}
        onChange={handlePage}
        size='large'
      />
      {children}
    </CharContext.Provider>
  );
};
