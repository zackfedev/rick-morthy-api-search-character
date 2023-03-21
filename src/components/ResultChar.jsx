import useSearch from "../lib/useSearch";
import { Grid } from "@mui/material";
import DisplayCard from "./Card";

const ResultChar = ({ searchTerm }) => {
  const searchResult = useSearch(searchTerm);

  if (searchTerm && searchResult.length === 0) {
    return <div>Not Found ...</div>;
  }

  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={{ xs: 1, md: 5 }}>
      {searchResult.map(({ name, image, status, gender, species, location }, index) => (
        <Grid
          key={index}
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
  );
};

export default ResultChar;
