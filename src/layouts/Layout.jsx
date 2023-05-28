import React from "react";
import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";
import SearchInput from "../components/SearchInput";

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        p: 3,
        m: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography
        variant='h3'
        component='h1'>
        Api From{" "}
        <Link
          href='https://rickandmortyapi.com/'
          underline='hover'>
          Rick & Morthy API
        </Link>
      </Typography>
      <SearchInput />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
