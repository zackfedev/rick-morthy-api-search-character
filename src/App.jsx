import { useContext, useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharContext, CharProvider } from "./context/CharContext";
import { Pagination } from "@mui/material";
import ResultChar from "./components/ResultChar";
import ResultCharFromParams from "./components/ResultCharFromParams";
import Layout from "./layouts/Layout";

export default function App() {
  // const { char, setCurrentPages, page } = useContext(CharContext);

  return (
    <CharProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route
              path='/'
              element={<Navigate to='/character' />}
            />
            <Route
              path='/character'
              element={<ResultChar />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CharProvider>
  );
}
