import React from "react";
import { BrowserRouter, useLocation, Route, Routes } from "react-router-dom";
import Shoes from "../page/Shoes";
import About from "../page/About";
import HollPage from "../page/HollPage/HollPage";
import Layout from "../Layout";
import NWC from "../page/NWC/NWC";
import NikeApp from "../page/NikeApp/NikeApp";
function ScrollToTop() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
function Routing() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<HollPage />} />
                    <Route path="shoes" element={<Shoes />} />
                    <Route path="about" element={<About />} />
                    <Route path="NikeAPP" element={<NikeApp />} />
                    <Route path="NWC" element={<NWC />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
