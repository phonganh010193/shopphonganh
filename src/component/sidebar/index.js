import { Link } from "react-router-dom";
import "../../styles/sidebar.css";
import SidebarContent from "./sidebar-content";

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
            <div className="sidebar-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <h5>Danh Mục</h5>
            </div>
            <div class="sidebar-content">
                <ul>
                    <li>
                        <Link to="/">NƯỚC HOA NAM</Link>
                    </li>
                    <li>
                        <Link to="/perfume-girl">NƯỚC HOA NỮ</Link>
                    </li>
                    <li>
                        <Link to="#">Nước hoa nữ cao cấp trên 3 triệu</Link>
                    </li>
                    <li>
                        <Link to="#">Nước hoa nữ dưới 1 triệu</Link>
                    </li>
                    <li>
                        <Link to="#">NƯỚC HOA MỚI RA MẮT</Link>
                    </li>
                    <li>
                        <Link to="#">Nước hoa nam cao cấp trên 3 triệu</Link>
                    </li>
                    <li>
                        <Link to="#">Nước hoa nam dưới 1 triệu</Link>
                    </li>
                    <li>
                        <Link to="#">LOUIS VUITION</Link>
                    </li>
                    <li>
                        <Link to="#">CHANEL</Link>
                    </li>
                    <li>
                        <Link to="#">KILIAN</Link>
                    </li>
                    <li>
                        <Link to="#">DIOR</Link>
                    </li>
                    <li>
                        <Link to="#">JO MALONE</Link>
                    </li>
                    <li>
                        <Link to="#">CREED</Link>
                    </li>
                    <li>
                        <Link to="#">DOLCE GABBALA</Link>
                    </li>
                    <li>
                        <Link to="#">HERMES</Link>
                    </li>
                    <li>
                        <Link to="#">GUICCI</Link>
                    </li>
                    <li>
                        <Link to="#">LANCOME</Link>
                    </li>
                    <li>
                        <Link to="#">Mỹ Phẩm</Link>
                    </li>
                    <li>
                        <Link to="#">NARCISO RODRIGUEZ</Link>
                    </li>
                    <li>
                        <Link to="#">VESARCE</Link>
                    </li>
                    <li>
                        <Link to="#">JEAN PAUL GAULTIER</Link>
                    </li>
                    <li>
                        <Link to="#">TOM FORD</Link>
                    </li>
                    <li>
                        <Link to="#">CAROLINA HERRENA</Link>
                    </li>
                    <li>
                        <Link to="#">HUGO BOSS</Link>
                    </li>
                    <li>
                        <Link to="#">CLIVE CHRISTIAN</Link>
                    </li>
                    <li>
                        <Link to="#">JEAN PAUL GAULTIER</Link>
                    </li>
                    <li>
                        <Link to="#">JEAN PAUL GAULTIER</Link>
                    </li>
                </ul>
            </div>
            <SidebarContent />
        </div>
        </div>
        
    );
}

export default Sidebar;
