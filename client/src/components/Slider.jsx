import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carouselOne from "../assets/carousel-bg/renaissance-carousel-i.jpg"
import carouselTwo from "../assets/carousel-bg/renaissance-carousel-ii.jpg"
import carouselThree from "../assets/carousel-bg/renaissance-carousel-iii.jpg"
import carouselFour from "../assets/carousel-bg/renaissance-carousel-iv.jpg"

const SampleNextArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: "20px", zIndex: 5 }} onClick={onClick} />
}

const SamplePrevArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", left: "20px", zIndex: 5 }} onClick={onClick} />
}

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div style={{ width: "100%", margin: "auto", height: "40vh" }}>
            <div style={{ width: "100%", margin: "auto", height: "37vh", background: "rgb(0,0,0,0.3)", position: "absolute", zIndex: 3 }}>
                <div style={{ color: "rgb(240, 250, 250)", width: "32vw", textAlign: "center", display: "flex", justifyContent: "center", margin: "20px auto", fontSize: "12px" }}>"What spirit is so empty and blind, that it cannot recognize the fact that the foot is more noble than the shoe, and skin more beautiful than the garment with which it is clothed?"  Michelangelo</div>
            </div>
            <Slider {...settings}>
                <img src={carouselOne} alt="" />
                <img src={carouselTwo} alt="" />
                <img src={carouselThree} alt="" />
                <img src={carouselFour} alt="" />
            </Slider>
        </div>)
}

