import React from "react";
import { Link, Outlet } from "react-router-dom";
//<Link to="/login">login/signup</Link>
//<Outlet />
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Home()
{
    return(
        <div>
            <Nav />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
            <Outlet />
        </div>
    )
}