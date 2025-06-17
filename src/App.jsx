// IMPORT DELLE ROTTE //
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import MoviesIndex from "./pages/MoviesIndex";

// FUNCTION APP //
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesIndex />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

