import IMAGE from "../../../contact";
import "../../../styles/nuochoanam.css";

function NuocHoaNam() {
    return (
        <div className="men-container">
            <p style={{ borderBottom: "1px solid gray" }}>Trang chủ / <span style={{ color: "#2d8356" }}>Nước hoa Nam</span></p>
            <h4>NƯỚC HOA NAM</h4>
            <div className="men-list">
                <div className="men-item">
                    <img src={IMAGE.ROJA_ELYSIUM_POUR_HOMME} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>ROJA ELYSIUM POUR HOMME</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.BRIT} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>BUBERRY BRIT FOR MEN</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.DOLCE_GABBANA} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>DOLCE GABBANA THE ONE FOR MEN EDT</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p> 8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.versace} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>VERSACE EROS FOR MEN</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.BLUE_CHANEL} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>CHANEl BLEU DE CHANEL EAU DE TOILETTE</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.DHERMES} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>HERMES TERRE D’HERMES EAU DE TOILETTE</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.LE_LABO_ANOTHER_13} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>LE LABO ANOTHER 13</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.chanel_homme} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>CHANEL Allure Homme Sport</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
                <div className="men-item">
                    <img src={IMAGE.heroes} className="men-image" alt="" />
                    <div className="btn-children">
                        <div className="btn-content">
                            <button>Mua sản phẩm</button>
                            <button>Xem chi tiết</button>
                        </div>
                    </div>
                    <p>FRANCK BOCLET COCAINE</p>
                    <div className="price">
                        <p>5.700.000 đ</p>
                        <p>8.600.000 đ</p>
                    </div>
                </div>
            </div>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Trước</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Sau</a></li>
            </ul>
        </div>
    );
}

export default NuocHoaNam;
