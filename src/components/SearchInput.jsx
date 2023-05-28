import React, { useCallback, useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CharContext } from "../context/CharContext";
import ResultChar from "./ResultChar";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [charFromQuery, setCharFromQuery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const namesParams = searchParams.get("name");

  const getDataFromParams = async () => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${namesParams}`);
      if (!res.ok) {
        throw new Error("Character Not Found");
      }

      const data = await res.json();

      setCharFromQuery(data?.results?.slice(0, 8));
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getDataFromParams();
  };

  useEffect(() => {
    if (query) {
      setSearchParams({ name: query });
    } else {
      setSearchParams("");
    }
  }, [query]);

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        value={query}
        onChange={handleChange}
        // onKeyDown={handleKeyPress}
        label='Search Character By Page'
        id='fullWidth'
        sx={{ my: 5 }}
      />
      {charFromQuery?.length > 0 ? (
        <ResultChar
          character={charFromQuery}
          params={namesParams}
        />
      ) : null}
    </form>
  );
};

export default SearchInput;
