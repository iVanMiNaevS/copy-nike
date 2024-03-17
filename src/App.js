import React from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Shoes from "./components/page/Shoes/Shoes";
import About from "./components/page/About/About";
import HollPage from "./components/page/HollPage/HollPage";
import Layout from "./components/Layout";
import NWC from "./components/page/NWC/NWC";
import NikeApp from "./components/page/NikeApp/NikeApp";
import CardProduct from "./components/page/CardProduct/CardProduct";
import Basket from "./components/page/Basket/Basket";
import Profile from "./components/page/Profile/Profile";
import SignIn from "./components/page/SignIn/SignIn";
import Login from "./components/page/SignUp/SignUp";
import SignUp from "./components/page/SignUp/SignUp";
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowX = "hidden";
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HollPage />} />
          <Route path="shoes" element={<Shoes />} />
          <Route path="shoes/:id" element={<CardProduct />} />
          <Route path="about" element={<About />} />
          <Route path="NikeAPP" element={<NikeApp />} />
          <Route path="NWC" element={<NWC />} />
          <Route path="basket" element={<Basket />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sign in" element={<SignIn />} />
          <Route path="sign up" element={<SignUp />} />
          <Route
            path="makingOrder"
            element={
              <h1 className="text-4xl text-center h-[70vh] pt-10">
                the order has been placed
              </h1>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
