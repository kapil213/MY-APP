import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

export default function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,             // Enable autoplay
        autoplaySpeed: 1000,        // Autoplay speed in milliseconds (2000ms = 2s)
        pauseOnHover: true,
    };

    return (
        <div className="py-16 px-5 bg-slate-100">
            <div className="">
                <h2 className="text-center text-4xl font-semibold">Our Clients</h2>
                <h4 className="text-center mt-7 text-lg">" Let's Check Our Clients "</h4>
            </div>
            {/* <h2> Image Slider </h2> */}
            <Slider {...settings} className=" mt-20 mb">
                <div className="flex justify-center">
                    <img src="https://techdigisoftware.com/image/pyatyaksh.png" alt="Image 1" className="h-36 w-32  ml-12" />
                </div>
                <div className="">
                    <img src="https://techdigisoftware.com/image/rishilogo.png" alt="Image 2" className="h-36 w-32  ml-12" />
                </div>
                <div className="">
                    <img src="https://techdigisoftware.com/image/mudra.png" alt="Image 3" className="h-36 w-32  ml-12" />
                </div>
                <div className="">
                    <img src="https://techdigisoftware.com/image/Vaidehi.png" alt="Image 4" className="h-36 w-32 ml-12" />
                </div>
            </Slider>
        </div>
    )
}