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

        <main>
          <Outlet></Outlet>
        </main>

        <footer>
            <div className="container"></div>
        </footer>
    </>
  );
}