import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
export default function AboutUs() {
    return (
        <div className="pb-8 pt-2 bg-white">
            <div className="about-box flex h-auto" >    
                <div className="about-img-box w-1/2 px-4 pr-6">
                    <img src="https://img.freepik.com/free-vector/flat-hand-drawn-people-analyzing-growth-charts_23-2148872152.jpg?t=st=1724752218~exp=1724755818~hmac=1558de6f78f75bb1f84153ec94c4fc1ac492bff470e4935b04ccb832481afe43&w=740" className=" hover:scale-95 hover:duration-150 duration-150">
                    </img>
                </div>
                <div className="about-cont-box w-1/2 px-10 pr-12 pt-24">
                    <h3 className="text-3xl font-semibold">Who We Are</h3>
                    <div className="mt-7 text-base  leading-6 text-gray-800 flex justify-center">
                        TechDigi Software Pvt. Ltd. is specialized in designing, developing, and maintaining digital platforms for companies. Our companies employ a team of skilled software engineers, developers designers, and digital marketers. The primary goal of our company is to meet the unique development and marketing requirements of our clients. We offer a wide range of services, including web application development, mobile app development, enterprise software development, website, e-commerce platforms, digital marketing, and more. Their expertise, technical skills, and commitment to quality weed enable organizations to leverage technology effectively, enhance their operations, and achieve their strategic goals.
                    </div>
                    <button className="px-2 py-1 text-lg font-semibold border-2 rounded-md text-white bg-blue-900 mt-4">Know more</button>
                </div>
                {/* <div className="banner-img w-1/2 pr-3 pl-5 pt-14 h-full" data-aos="zoom-in">
                    <div className="relative w-full max-w-screen-2xl mx-auto max-h-full">
                        <div className="overflow-hidden rounded-lg max-h-full">
                            <img
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex}`}
                                className="w-full max-h-screen transition-transform duration-500 ease-in-out transform scale-100"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

