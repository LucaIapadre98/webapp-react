import { Outlet } from "react-router-dom";
import { useLoader} from "../contexts/ContextLoader";
import Header from "../components/Header";
import Loader from "../components/Loader";

export default function DefaultLayout() {
  const { isLoading } = useLoader();

  return (
    <>
        <Loader show={isLoading} />
        <Header />

        <main className="page-shell">
          <Outlet></Outlet>
        </main>

        <footer className="site-footer">
            <p>CineScope · Il cinema è più bello quando se ne parla.</p>
        </footer>
    </>
  );
}