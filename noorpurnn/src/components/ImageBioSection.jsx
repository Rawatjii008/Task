import React from "react";
import Image from "next/image";

const ImageBioSection = () => {
  const YogiAdityanath = "/YOGIADITYANATH.jpg";
  const YodiModi = "/cm.webp";

  return (
    <div className="flex flex-col sm:flex-row gap-5 w-11/12 mx-auto">
      {/* Left Section */}
      <div className="flex flex-col gap-3 items-center sm:w-1/2 md:w-1/5">
        <div className="bg-blue-100 rounded">
          <Image
            src={YogiAdityanath}
            alt="YOGIADITYANATH IMAGE"
            width={300}
            height={300}
            layout="responsive"
            className="rounded"
          />
        </div>
        <div className="text-primary font-bold text-lg text-center">
          <span>SHRI YOGI ADITYANATH</span>
          <span className="block sm:text-base font-bold">CHIEF MINISTER</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 md:w-11/12 relative">
        <div className="rounded overflow-hidden">
          <Image
            src={YodiModi}
            alt="YodiModi IMAGE"
            width={1000}
            height={800}
            layout="responsive"
            className="rounded h-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBioSection;
