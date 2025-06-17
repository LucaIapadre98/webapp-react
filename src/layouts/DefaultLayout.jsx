import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
        <Header />
        <main>
            <Outlet></Outlet>
        </main>
        <footer>
            <div className="container"></div>
        </footer>
    </>
  )
}