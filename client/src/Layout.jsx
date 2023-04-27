import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Layout() {
    return(
        <main>
        <Header />
        <Outlet />
        <Footer />
        
        </main>
    );
}