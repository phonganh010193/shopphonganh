import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/sidebar";
import HomePage from "../../views/NavbarInfo/HomePage";
import NuocHoaNam from "../../views/SidebarInfo/NuocHoaNam";
import NuocHoaNu from "../../views/SidebarInfo/NuocHoaNu";

function AppContent() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-8 app-sidebar">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/perfume-men" element={<NuocHoaNam />}></Route>
                        <Route path="/perfume-girl" element={<NuocHoaNu />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AppContent;
