import { Pagination } from "@mui/material";
import { createContext, useState, useEffect, useMemo } from "react";

export const CharContext = createContext([]);

export const CharProvider = ({ children }) => {
  const [char, setChar] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacter = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();

    setChar(data.results);
  };

  let isFetching = false;

  useEffect(() => {
    if (!isFetching) {
      isFetching = true;

      getCharacter();
    }
  }, [page]);

  const handleChangePage = (e, value) => {
    setPage(value);
  };

  return (
    <CharContext.Provider value={char}>
      <Pagination
        sx={{ pb: 3 }}
        count={10}
        page={page}
        onChange={handleChangePage}
        size='large'
      />
      {children}
    </CharContext.Provider>
  );
};
