import Link from "next/link";
import React from "react";
import "../style/aboveHeaderSection.css";

const AboveHeaderSection = () => {
  return (
    <section className="text-xs w-full bg-blue-500 h-8 flex justify-between items-center">
      <article className="flex justify-start items-center w-1/3 h-full">
        <Link
          className="bg-green-600 text-white font-bold h-full flex justify-start items-center pl-14 px-5"
          href="tel:+1234567890"
        >
          Call us: 1800 1803 012
        </Link>
      </article>
      <article className="flex justify-start items-center w-2/3 h-full font-bold text-white">
        <Link
          className="border-r border-white flex justify-center items-center px-2 w-fit h-full"
          href="#"
        >
          Zoom Webinar
        </Link>
        <Link
          className="border-r border-white flex justify-center items-center px-2 w-fit h-full"
          href="#"
        >
          <span className="bg-green-700 p-1 rounded px-2 flex justify-center items-center w-fit h-4/6 applyForDogLicenseAnimation">
            Apply for Dog License
          </span>
        </Link>
        <Link
          className="border-r border-white flex justify-center items-center px-2 w-fit h-full"
          href="#"
        >
          Helpline
        </Link>
        <Link
          className="border-r border-white flex justify-center items-center px-2 w-fit h-full"
          href="#"
        >
          Ghaziabad 311 App
        </Link>
        <Link
          className="border-r border-white flex justify-center items-center px-2 w-fit h-full"
          href="#"
        >
          Download Swachhata App
        </Link>
        <Link
          className="border-r border-white flex justify-center items-center px-2 w-fit h-full"
          href="#"
        >
          Email Us: [email protected]
        </Link>
      </article>
    </section>
  );
};

export default AboveHeaderSection;
