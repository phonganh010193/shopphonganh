import React from "react";
import NavbarShop from "./component/topbar/headerNavbar";
import Logo from "./component/topbar/headerLogo";
import HeaderShop from "./component/topbar/headerShop";
import "./styles/header.css";
import Sidebar from "./component/sidebar";
import NuocHoaNam from "./views/NuocHoaNam";
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
            <NuocHoaNam />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
