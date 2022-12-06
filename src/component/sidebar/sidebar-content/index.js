import IMAGE from "../../../contact";
import "../../../styles/sidebar.content.css";

function SidebarContent() {
    return (
        <div className="seling-product">
            <h4>Sản phẩm bán chạy</h4>
            <div className="product-content">
                <div className="product-item">
                    <img src={IMAGE.BLUE_CHANEL} alt="" />
                    <div className="product-info">
                        <p>CHANEl BLEU DE CHANEL EAU DE TOILETTE</p>
                        <div className="produc-price">
                            <p>5.800.000 đ</p>
                            <p>8.900.000 đ</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={IMAGE.BURBERRY_GIRL} alt="" />
                    <div className="product-info">
                        <p>BUBERRY BRIT FOR MEN</p>
                        <div className="produc-price">
                            <p>5.800.000 đ</p>
                            <p>8.900.000 đ</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={IMAGE.DHERMES} alt="" />
                    <div className="product-info">
                        <p>BLUE_CHANEL</p>
                        <div className="produc-price">
                            <p>5.800.000 đ</p>
                            <p>8.900.000 đ</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={IMAGE.MONT_BALNC} alt="" />
                    <div className="product-info">
                        <p>BLUE_CHANEL</p>
                        <div className="produc-price">
                            <p>5.800.000 đ</p>
                            <p>8.900.000 đ</p>
                        </div>
                    </div>
                </div>
                <div className="product-item">
                    <img src={IMAGE.GOODGIRL} alt="" />
                    <div className="product-info">
                        <p>GOOG GIRL</p>
                        <div className="produc-price">
                            <p>5.800.000 đ</p>
                            <p>8.900.000 đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SidebarContent;
