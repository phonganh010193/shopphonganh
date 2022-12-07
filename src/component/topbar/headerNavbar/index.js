import { Link } from "react-router-dom";
import IMAGE from "../../../contact";
import "../../../styles/navbar.css";

function NavbarShop() {
    return (
        <div className="container-fluid">
            <div className="row row-navbar">
                <div className="col-lg-8 topnav">
                    <div>
                        <Link to="/">Trang Chủ</Link>
                        <Link to="#news">Tư Vấn</Link>
                        <Link to="#contact">Giới Thiệu</Link>
                        <Link to="#about">Sản Phẩm</Link>
                        <Link to="#about">Mỹ Phẩm</Link>
                        <Link to="#about">Liên Hệ</Link>
                        <Link to="#about">Dịch Vụ Mới</Link>
                    </div>
                    <div className="search-content">
                        <form className="form-search">
                            <input type="text" placeholder="Search.." />
                            <button type="submit">
                                <img src={IMAGE.icon_search} className="icon-search" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarShop;
