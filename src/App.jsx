// IMPORT DELLE ROTTE //
import { BrowserRouter, Routes, Route} from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";
import MoviesIndex from "./pages/MoviesIndex";
import MoviesShow from "./pages/MoviesShow";

// FUNCTION APP //
export default function App() {
  return (
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
  )
}

