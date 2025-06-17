import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
    <header>
        <div className="container">Header</div>
    </header>
     <main>
        <Outlet></Outlet>
    </main>
     <footer>
        <div className="container">Footer</div>
    </footer>
    </>
  )
}