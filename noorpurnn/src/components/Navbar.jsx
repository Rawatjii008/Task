"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState, useEffect } from "react";
import Lodgecomplaint from "./Lodgecomplaint";
import { newContext } from "@/context/contextFun";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [lodge, setLodge] = useState(false);

  const toggleLodge = () => {
    setLodge(!lodge);
  };

  const { garbageUser, handleLogout } = useContext(newContext);

  // useEffect(() => {
  //   // Any client-side only code
  // }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <div>
      <div className="bg-slate-100 grid grid-cols-2 lg:grid-cols-3 p-4">
        <div className="w-full h-auto font-mono font-bold bg-slate-100 text-primary flex justify-center items-center">
          <div className="w-full flex justify-center items-center bg-slate-100">
            <Image
              className="w-40 h-20 "
              src="/flag.gif"
              alt="flag"
              width={70}
              height={70}
            />
          </div>
          <div className="w-auto h-full flex">
            <Image
              alt="uttar_pradesh"
              src="/Seal_of_Uttar_Pradesh.svg"
              width={100}
              height={60}
            />
          </div>
        </div>

        <div className="flex flex-row text-primary font-bold text-lg flex-wrap items-center text-center lg:text-[25px] md:mt-2 md:text-[25px] justify-center w-full md:w-auto lg:px-6">
          <p className="flex-grow">नगर पालिका परिषद नूरपुर, बिजनौर (उ.प्र.)</p>
        </div>

        <div className="hidden lg:flex justify-center space-x-10 m-5">
          <Image
            src="/swachh-bharatlogo.png"
            alt="swachh-bharatlogo"
            width={120}
            height={80}
          />
          <Image
            src="/azadi-mahotsav.png"
            alt="azadi-mahotsav"
            width={120}
            height={80}
          />
        </div>
      </div>
      <nav className="bg-primary border-gray-200">
        <div className="flex flex-wrap items-center justify-between mx-4 p-3">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block" id="navbar-dropdown">
            <div className="flex flex-col font-small justify-evenly lg:flex flex-wrap p-4 md:p-3 lg:p-1 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-primary">
              <Link
                href="/"
                className="block py-2 px-3  rounded md:bg-transparent md:hover:text-black text-white md:p-0"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white md:hover:text-black md:p-0"
              >
                About
              </Link>
              <Link
                href="/departments"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white md:hover:text-black md:p-0"
              >
                Departments
              </Link>
              <Link
                href="/checkuserinfo"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white md:hover:text-black md:p-0"
              >
                Check Status
              </Link>
              <Link
                href="/contactus"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white md:hover:text-black md:p-0"
              >
                Contact us
              </Link>
              <Link
                href="/services"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent text-white md:border-0 md:hover:text-black md:p-0"
              >
                Services
              </Link>

              <Link
                href="/notice"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent text-white md:border-0 md:hover:text-black md:p-0"
              >
                Notice
              </Link>
              <Link
                href="/e-tender"
                className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent text-white md:border-0 md:hover:text-black md:p-0"
              >
                Tender/E-tender Auction
              </Link>
              {garbageUser !== null ? (
                <>
                  <Link
                    href="/viewcomplains"
                    className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent text-white md:border-0 md:hover:text-black md:p-0"
                  >
                    View Complains
                  </Link>
                  <Link
                    href="/alldetailsinfo"
                    className="block py-2 px-3  rounded hover:bg-gray-700 md:hover:bg-transparent text-white md:border-0 md:hover:text-black md:p-0"
                  >
                    Status Dashboard
                  </Link>
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex w-full justify-center items-center mt-4 space-x-4">
            <div>
              <button
                onClick={toggleLodge}
                className="bg-white hover:bg-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Lodge Complaint
              </button>
              {lodge && <Lodgecomplaint setLodge={setLodge} />}
            </div>
           
              {garbageUser && <button
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Logout
              </button>}
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
