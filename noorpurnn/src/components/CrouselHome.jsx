"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const CrouselHome = () => {
  const imagesList = [
    {
      img: "/farmerImage.jpg",
    },
    {
      img: "/brother-and-sisters.jpg",
    },
    {
      img: "/brother-and-sisters2.jpg",
    },
    {
      img: "/smartphone-with-officer.jpg",
    },
    {
      img: "/Indian-Flag-Image.jpg",
    },
  ];

  return (
    <div className="flex justify-center p-4 bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="relative w-full rounded-lg shadow-lg bg-white"
        style={{ height: "70vh" }}
      >
        {imagesList.map((ele, index) => (
          <SwiperSlide key={index}>
            <Image
              src={ele.img}
              width={400} 
              height={300}
              className="w-full h-full object-cover rounded-lg"
              alt={`Slide`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CrouselHome;
