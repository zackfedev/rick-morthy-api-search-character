import { Pagination } from "@mui/material";
import { useContext } from "react";
import { CharContext } from "../context/CharContext";

const SetPagination = ({ children }) => {
  const { setCurrentPages, page } = useContext(CharContext);

  const handleChangePage = (e, value) => {
    console.log(value);
    setCurrentPages(value);
  };

  return (
    <>
      <Pagination
        sx={{ pb: 3 }}
        count={10}
        page={page}
        onChange={handleChangePage}
        size='large'
      />
      {children}
    </>
  );
};

export default SetPagination;
