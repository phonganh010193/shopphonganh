import IMAGE from "../../../contact";
import "../../../styles/navbar.css";

function NavbarShop() {
    return (
        <div className="container-fluid">
            <div className="row row-navbar">
                <div class="col-lg-8 topnav">
                    <div>
                        <a href="#home">Trang Chủ</a>
                        <a href="#news">Tư Vấn</a>
                        <a href="#contact">Giới Thiệu</a>
                        <a href="#about">Sản Phẩm</a>
                        <a href="#about">Mỹ Phẩm</a>
                        <a href="#about">Liên Hệ</a>
                        <a href="#about">Dịch Vụ Mới</a>
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
