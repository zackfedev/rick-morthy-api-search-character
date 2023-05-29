import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CharProvider } from "./context/CharContext";
import ResultChar from "./components/ResultChar";
import Layout from "./layouts/Layout";
import "./App.css";

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
