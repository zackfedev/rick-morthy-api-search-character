import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ResultChar from "./ResultChar";
import useManipulateData from "../hook/useManipulateData";
import { CharContext } from "../context/CharContext";
import { LoadingButton } from "@mui/lab";

const SearchInput = () => {
  const mq = useMediaQuery("(max-width:500px)");
  const { char } = useContext(CharContext);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);
  const [isInputError, setIsInputError] = useState(false);
  const namesParams = searchParams.get("name");

  const { dataCharacter, setDataCharacter, getDataFromParams, setIsError, isError, isLoading } =
    useManipulateData(`https://rickandmortyapi.com/api/character/?name=${namesParams}`);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.length === 0) {
      setIsInputError(true);
    } else {
      setIsInputError(false);
      getDataFromParams();
      setQuery("");
    }

    setIsQuerySubmitted(true);
  };

  const resetDataCharacter = () => {
    setIsError("");
    setDataCharacter([]);
  };

  useEffect(() => {
    if (query) {
      setSearchParams({ name: query });
    } else {
      setSearchParams("");
    }
  }, [query]);

  return (
    <Box sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          error={isInputError ? true : false}
          helperText={isInputError ? "Try To type Something" : null}
          fullWidth
          value={query}
          onChange={handleChange}
          variant='filled'
          label={"Search Character By Name"}
          id='fullWidth'
          sx={{ my: 5 }}
        />
        <Button
          size='large'
          variant='contained'
          onClick={resetDataCharacter}>
          Reset
        </Button>
        {mq ? (
          <LoadingButton
            sx={{ marginLeft: 2 }}
            size='large'
            onClick={handleSubmit}
            loading={isLoading}
            loadingPosition='center'
            variant='contained'>
            <span>Send</span>
          </LoadingButton>
        ) : null}
      </form>

      <Box sx={{ pt: 2 }}>
        {isQuerySubmitted && dataCharacter?.length > 0 ? (
          <ResultChar
            resultChar={dataCharacter}
            params={namesParams}
            isLoading={isLoading}
            isError={isError}
          />
        ) : (
          <ResultChar
            resultChar={char}
            params={namesParams}
            isLoading={isLoading}
            isError={isError}
          />
        )}
      </Box>
    </Box>
  );
};

export default SearchInput;
