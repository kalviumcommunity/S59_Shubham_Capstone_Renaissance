import React, { Component } from "react";
import Slider from "react-slick";
import bgSemiGreen from '../assets/bg-semi-2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portrait_1 from '../assets/carousel-secondary/portrait_deEdmund.jpg'
import portrait_2 from '../assets/carousel-secondary/portrait_deLeonardo.jpg'
import portrait_3 from '../assets/carousel-secondary/portrait_deMilton.jpg'

const SampleNextArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClick} />
}

const SamplePrevArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClick} />
}

function SecondarySlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className= "h-[70vh] bg-cover" style={{ backgroundImage: `url(${bgSemiGreen})`  }}>
            <Slider {...settings} className="slider-container w-[70vw] m-auto h-[60vh]">
                <div className="p-5">
                    <img src={portrait_2} alt="" className="rounded" />
                    <div>
                        <p className="text-center">Leonardo Da Vinci</p>
                        <p className="text-justify">Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance.</p>
                    </div>
                </div>
                <div className="p-5 w-fit">
                    <img src={portrait_3} alt="" className="rounded" />
                    <div>
                        <p className="text-center">John Milton</p>
                        <p className="text-justify">John Milton was an English poet, polemicist, and civil servant.</p>
                    </div>

                </div>

                <div className="p-5">
                    <img src={portrait_1} alt="" className="rounded" />
                    <div className="text-center">
                        <p>Edmund Spenser</p>
                        <p className="text-justify">Edmund Spenser was an English poet best known for The Faerie Queene.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default SecondarySlider;


