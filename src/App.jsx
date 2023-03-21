import { useState } from "react";
import { Box } from "@mui/system";
import { TextField, Typography, Link } from "@mui/material";
import { CharProvider } from "./context/CharContext";
import ResultChar from "./components/ResultChar";

export default function App() {
  const [input, setInput] = useState("");

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
      <TextField
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        label='Search Character By Page'
        id='fullWidth'
        sx={{ my: 5 }}
      />
      <CharProvider>
        <ResultChar searchTerm={input} />
      </CharProvider>
    </Box>
  );
}
