import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import "./Testinomials.css";
import "./Home.css";
export default function Homebanner() {
    return (
        <div className=" home-banner-upper flex w-full mt-20">
            <div className="home-banner flex flex-col pt-8 pb-5 bg-slate-50 w-7/12 ">
                <div className="banner-logo flex justify-center">
                    <img src="https://codecartel.in/static/media/mainCube.02f4fecf.svg"></img>
                </div>
                <div className="banner-text px-12 flex-col items-center">
                    <h1 className="text-4xl font-semibold mt-1  leading-snug text-center opacity-100 ">Creating <br></br><span className="text-6xl mt-6 italic animate-pulse"> Impactful Digital</span><br></br><span className="text-5xl mt-3 italic">Experiences</span></h1>
                    <p className="mt-7 text-lg text-center">Achieve Your Goals with our Exceptional Website and Application Development Expertise</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="px-2 py-2 text-lg font-semibold border-2 rounded-md text-white bg-blue-900 mt-5">Explore your options</button>
                </div>
            </div>
            <div className="banner-img">
                <img src="https://img.freepik.com/free-vector/tiny-graphic-designer-drawing-with-big-pen-computer-screen-creators-work-creative-woman-working-laptop-flat-vector-illustration-digital-design-concept-banner-landing-web-page_74855-25342.jpg?t=st=1724678479~exp=1724682079~hmac=da3c6e72d3a6dc468d105706b2c441edec6822e34dd40d733d0edfda841cdd39&w=740">
                </img>
            </div>
        </div>
    )
}


