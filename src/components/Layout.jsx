import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./elements/header/Header";
import Footer from "./elements/footer/Footer";
function layout() {
    const linksInHeader = [
        { id: "products", link: "/products", text: "Products" },
        { id: "about", link: "/about", text: "About us" },
        { id: "sale", link: "/sale", text: "Sale" },
        { id: "shoes", link: "/shoes", text: "Shoes" },
    ];

    return (
        <div>
            <Header links={linksInHeader} />
            <Outlet />
            <Footer />
        </div>
    );
}

export default layout;
