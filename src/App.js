import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Shoes from "./components/page/Shoes";
import About from "./components/page/About";
import HollPage from "./components/page/HollPage/HollPage";
import Layout from "./components/Layout";
import NWC from "./components/page/NWC/NWC";
import NikeApp from "./components/page/NikeApp/NikeApp";
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
