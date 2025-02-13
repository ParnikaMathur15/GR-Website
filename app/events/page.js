"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LoaderCircle } from "lucide-react";
import { Title } from "@radix-ui/react-toast";

// Custom arrow components
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-0 transform -translate-y-1/2 text-secondary cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] left-0 transform -translate-y-1/2 text-secondary cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

const sampleEvents = [
  {
    eventName: "TechnoSapiens",
    images: ["event.png", "event2.jpg", "event3.jpg"],
    eventDesc: "An amazing conference bringing tech enthusiasts together!",
  },
];

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (desc,Title) => {
    setModalContent(desc);
    setModalTitle(Title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex flex-wrap gap-10 lg:gap-20 md:gap-7 justify-center mt-20">
      {sampleEvents.map((item, index) => (
        <div key={index} className=" w-[350px] md:w-[340px] sm:w-[400px] h-[420px] bg-gray-800 rounded-lg p-4 shadow-lg">
          <div className="text-center mb-2">
            <p className="font-bold text-white text-2xl border-b-2 border-secondary pb-2 mb-5">
              {item.eventName}
            </p>
          </div>
          <div className="relative">
            <Slider {...settings}>
              {item.images.map((image, i) => (
                <div key={i} className="text-white">
                  <img
                    src={`/uploads/${image}`}
                    alt={`Event ${index + 1} - Image ${i + 1}`}
                    className="w-full h-[250px] object-cover rounded-[98%_0%_98%_0%_/_42%_63%_37%_58%_]"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center items-center mt-5">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md w-[150px]"
            onClick={() => openModal(item.eventDesc,item.eventName)}
          >
            Learn More
          </button>
        </div>
        </div>
      ))}
      {modalOpen && (
        <div className=" h-screen backdrop-blur-md fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-gray-800 shadow-[0px_1px_10px_0px_#3182ce] shadow-white flex flex-col justify-between p-6 rounded-lg w-80 h-[65%] text-center">
            <p className="font-bold text-white text-2xl border-b-2 border-orange-500 pb-2 mb-5">{modalTitle}</p>
            <p className="text-white">{modalContent}</p>
           
            
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
