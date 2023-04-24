import { Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import Header from "./Header.js";

export default function Layout() {
    return(
        <main>
        <Header />
        <Outlet />
        <Footer />
        
        </main>
    );
}