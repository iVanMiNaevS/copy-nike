import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./elements/header/Header";
import Footer from "./elements/footer/Footer";
function layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default layout;
