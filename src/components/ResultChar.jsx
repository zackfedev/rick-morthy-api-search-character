import React, { useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import DisplayCard from "./Card";
import { useContext, useState } from "react";
import { CharContext } from "../context/CharContext";

const ResultChar = ({ character, params }) => {
  const { setCurrentPages, page, char } = useContext(CharContext);

  const handleChangePage = (e, value) => {
    console.log(value);
    setCurrentPages(value);
  };

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <React.Fragment>
      <Pagination
        sx={{ pb: 3 }}
        count={10}
        page={page}
        onChange={handleChangePage}
        size='large'
      />
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, md: 5 }}>
        {params
          ? character?.map(({ id, name, image, status, gender, species, location }) => (
              <Grid
                key={id}
                item
                md={6}
                sm={12}>
                <DisplayCard
                  source={image}
                  charNames={name}
                  status={status}
                  gender={gender}
                  species={species}
                  location={location}
                />
              </Grid>
            ))
          : char?.map(({ id, name, image, status, gender, species, location }) => (
              <Grid
                key={id}
                item
                md={6}
                sm={12}>
                <DisplayCard
                  source={image}
                  charNames={name}
                  status={status}
                  gender={gender}
                  species={species}
                  location={location}
                />
              </Grid>
            ))}
      </Grid>
    </React.Fragment>
  );
};

export default ResultChar;
