import React, { Component, lazy, useState } from "react";
import Slider from "react-slick";
import bgSemiGreen from '../assets/bg-semi-2.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portrait_1 from '../assets/carousel-secondary/portrait_deEdmund.jpg'
import portrait_2 from '../assets/carousel-secondary/portrait_deLeonardo.jpg'
import portrait_3 from '../assets/carousel-secondary/portrait_deMilton.jpg'

import downChevron from '../assets/arrow.png'

const imageArray = [portrait_1, portrait_2, portrait_3]
const SampleNextArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClick} />
}

const SamplePrevArrow = ({ className, style, onClick }) => {
    return <div className={className} style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClick} />
}


function SecondarySlider() {
    const [imageIndex, setImageIndex] = useState(1)
    const settings = {
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 1200,
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (current, next) => {
            const totalSlides = imageArray.length
            const middleIndex = Math.floor((totalSlides - 1) / 2)
            setImageIndex((next + middleIndex) % totalSlides)
        }

    }
    return (
        <div className="h-[400px] bg-cover" style={{ backgroundImage: `url(${bgSemiGreen})` }}>
            <Slider {...settings} className="slider-container w-[70vw] m-auto h-[60vh]">
                {imageArray.map((imageSrc, index) => (
                    <div className={index == imageIndex ? "scale-[1.1] transition-transform px-5 py-8 rounded shadow-xl bg-white" : "shadow-xl p-5 scale-[0.8] bg-[#97D4A6] rounded"}>
                        <img src={imageSrc} alt={imageSrc} className="rounded" />
                        {index == imageIndex && <div className="absolute bottom-[15%] w-[90%] m-auto">
                            <img src={downChevron} className="w-5 m-auto animate-bounce cursor-pointer" alt="" />
                            <p className="text-[15px] text-slate-300 text-shadow text-center mb-1.5">Leonardo Da Vinci</p>
                        </div>}

                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SecondarySlider;

// <div>
//     <p className="text-center">Leonardo Da Vinci</p>
//     <p className="text-justify">Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance.</p>
// </div>

