import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import IMAGE from "../../../contact";
import { useRef, useState } from "react";
import "../../../styles/homepage.css";

function HomePage() {
    const sliderRef = useRef();
    const sliderrSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 1,
        slidesPerRow: 1,
        arrows: false,
        className: 'slide-content',
        dotsClass: 'slick-dots'
    };
    return (
        <div className="homepage-container">
            <Slider {...sliderrSettings} ref={sliderRef} >
                <div className="slide-item">
                    <img src={IMAGE.BACK_FRIDAY_MEN} alt="" />
                </div>
                <div className="slide-item">
                    <img src={IMAGE.BACK_FRIDAY_WOMMEN} alt="" />
                </div>
                <div className="slide-item">
                    <img src={IMAGE.NUOC_HOA_CHIET} alt="" />
                </div>
            </Slider>

        </div>
    )
}

export default HomePage;
