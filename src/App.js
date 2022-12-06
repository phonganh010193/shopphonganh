import React from "react";
import NavbarShop from "./component/topbar/headerNavbar";
import Logo from "./component/topbar/headerLogo";
import HeaderShop from "./component/topbar/headerShop";
import "./styles/header.css";
import Sidebar from "./component/sidebar";
import NuocHoaNam from "./views/NuocHoaNam";
import NuocHoaNu from "./views/NuocHoaNu";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
function App() {
  return (
    <div className="App">
      <HeaderShop />
      <Logo />
      <NavbarShop />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 app-sidebar">
            <Sidebar />
            <Routes>
              <Route path="/" element={<NuocHoaNam />}></Route>
              <Route path="/perfume-girl" element={<NuocHoaNu />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
