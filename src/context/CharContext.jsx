import { Pagination } from "@mui/material";
import { useEffect, createContext, useState, useMemo } from "react";

export const CharContext = createContext([]);

export const CharProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const handlePage = (e, value) => {
    setPage(value);
  };

  const memoizedData = useMemo(async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = await response.json();

    return data.results;
  }, [page]);

  useEffect(() => {
    memoizedData.then((data) => {
      setChar(data);
    });
  }, [memoizedData]);

  const [char, setChar] = useState([]);

  const charInfo = useMemo(() => {
    return {
      char,
      page,
    };
  }, [char, page]);

  console.log(char);

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
