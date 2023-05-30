import { Grid } from "@mui/material";
import DisplayCard from "./Card";

const ResultChar = ({ resultChar, isError }) => {
  if (isError) {
    return <p>{isError}</p>;
  }

  return (
    <Grid
      container
      justifyContent='center'
      rowSpacing={5}
      columnSpacing={{ xs: 1, md: 5 }}
      sx={{ width: "100%" }}>
      {resultChar?.map(({ id, name, image, status, gender, species, location }) => (
        <Grid
          key={id}
          item
          xl={4}
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
  );
};

export default ResultChar;
