import React from "react";
import NavbarShop from "../../component/topbar/headerNavbar";
import Logo from "../../component/topbar/headerLogo";
import HeaderShop from "../../component/topbar/headerShop";
import "../../styles/header.css";
import Footer from "../../component/footer";
import AppContent from "../app-content";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HeaderShop />
      <Logo />
      <NavbarShop />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
