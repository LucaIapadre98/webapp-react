// IMPORT DELLE ROTTE //
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import MoviesIndex from "./pages/MoviesIndex";
import MoviesShow from "./pages/MoviesShow";
import { LoaderProvider } from "./contexts/ContextLoader";

// FUNCTION APP //
export default function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />

            <Route path="/movies">
              <Route index element={<MoviesIndex />} />
              <Route path=":id" element={<MoviesShow />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  );
}
