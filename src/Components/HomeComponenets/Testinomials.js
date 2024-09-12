import "./Testinomials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from 'react-slick';

export default function Testinomials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,             // Enable autoplay
        autoplaySpeed: 2000,        // Autoplay speed in milliseconds (2000ms = 2s)
        pauseOnHover: true,
    };

    return (
        <div className="pt-20 pb-16 bg-slate-50">
            <div className="">
                <h2 className="text-center text-4xl font-semibold">Testinomials</h2>
                <h4 className="text-center mt-7 text-lg">" What People Say About Us "</h4>
            </div>
            <div className="testi-cont w-screen flex px-10">
                <div className="testi-img w-2/4 flex justify-end items-center ">
                    <div className="flex-col justify-center items-center text-center w-4/3 h-4/5 px-9 py-12">
                    </div>
                </div>
                <div className="w-3/5 testi-box">
                    <Slider {...settings} className="">
                        <div className="">
                            <div class="flex flex-col items-center gap-3 dark:text-white max-w-xl w-full bg-white pt-2 pb-4 px-8 rounded-md my-8 shadow-md hover:scale-105 hover:duration-150 duration-150 mx-3 border-black">
                                <div class="mt-4 flex flex-col items-center">
                                    <div class="circular-div">
                                        <img
                                            src="https://techdigisoftware.com/image/shrikant.jpg"
                                            alt="Img"
                                        />
                                    </div>
                                    <div class="ml-3 p-1 mt-2">
                                        <h6 class="text-xl text-black font-medium">Dr. Srikant Verma</h6>
                                    </div>
                                </div>

                                <div class="text-sm text-gray-700 px-4 mt-2">
                                    "We approached TechDigi Software Pvt Ltd located in Bhopal, to develop a mobile application for our startup, and they delivered exceptional results. The team was incredibly responsive, always keeping us updated on the progress and addressing any concerns promptly".
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div class="flex flex-col gap-3 dark:text-white max-w-xl w-full bg-white pt-2 pb-4 px-8 rounded-md my-8 shadow-md hover:scale-105 hover:duration-150 duration-150 mx-3 border-black">
                                <div class="mt-4 flex flex-col items-center">
                                    <div class="circular-div">
                                        <img
                                            src="https://techdigisoftware.com/image/rishipackaging.jpg"
                                            alt="Img"
                                        />
                                    </div>
                                    <div class="ml-3 p-1 mt-2">
                                        <h6 class="text-xl text-black font-medium">Ajay Maheshwari</h6>
                                    </div>
                                </div>

                                <div class="text-sm text-gray-700 px-4 mt-2">
                                    "TechDigi Software Pvt. Ltd. understood my vision and translated it into a beautiful and functional website. The development process was smooth, and their team was accommodating to any changes or additions we requested. I highly recommend TechDigi for their expertise in website development."
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div class="flex flex-col gap-3 dark:text-white max-w-xl w-full bg-white pt-2 pb-4 px-8 rounded-md my-8 shadow-md hover:scale-105 hover:duration-150 duration-150 mx-3 border-black">
                                <div class="mt-4 flex flex-col items-center">
                                    <div class="circular-div">
                                        <img
                                            src="https://techdigisoftware.com/image/shrikant.jpg"
                                            alt="Img"
                                        />
                                    </div>
                                    <div class="ml-3 p-1 mt-2">
                                        <h6 class="text-xl text-black font-medium">Dr. Srikant Verma</h6>
                                    </div>
                                </div>

                                <div class="text-sm text-gray-700 px-4 mt-2">
                                    "We approached TechDigi Software Pvt Ltd located in Bhopal, to develop a mobile application for our startup, and they delivered exceptional results. The team was incredibly responsive, always keeping us updated on the progress and addressing any concerns promptly".
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div class="flex flex-col gap-3 dark:text-white max-w-xl w-full bg-white pt-2 pb-4 px-8 rounded-md my-8 shadow-md hover:scale-105 hover:duration-150 duration-150 mx-3 border-black">
                                <div class="mt-4 flex flex-col items-center">
                                    <div class="circular-div">
                                        <img
                                            src="https://techdigisoftware.com/image/ritesh.jpg"
                                            alt="Img"
                                        />
                                    </div>
                                    <div class="ml-3 p-1 mt-2">
                                        <h6 class="text-xl text-black font-medium">Dr. Riteshwar Bhumarkar</h6>
                                    </div>
                                </div>

                                <div class="text-sm text-gray-700 px-4 mt-2">
                                    "Their team was highly skilled and knowledgeable, guiding us through every step of the process. They took the time to understand our business goals and target audience, resulting in an website that perfectly aligned with our needs. I am grateful to TechDigi Software Pvt Ltd for their professionalism and commitment to excellence."
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    )
}
