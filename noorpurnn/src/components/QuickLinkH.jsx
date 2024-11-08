import Link from "next/link";
import React from "react";

const QuickLinkH = () => {
  return (
    <div>
      <div className="w-1/2 mx-auto p-4">
        <h2 className="text-red-600 font-bold text-lg mb-4 text-center">
          QUICK LINKS H
        </h2>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-ambulance mr-2" aria-hidden="true"></i>{" "}
              Ambulance
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-tint mr-2" aria-hidden="true"></i> Blood Bank
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-pills mr-2" aria-hidden="true"></i> Chemist
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-lightbulb mr-2" aria-hidden="true"></i>{" "}
              Electricity
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-eye mr-2" aria-hidden="true"></i> Eye Hospital
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-fire mr-2" aria-hidden="true"></i> Fire
              Brigade
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-hospital mr-2" aria-hidden="true"></i>{" "}
              Hospitals
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-shield-alt mr-2" aria-hidden="true"></i>{" "}
              Police
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 w-full">
          <Link href="#">
            <div className="group flex bg-white border p-4 hover:bg-blue-600 hover:text-white cursor-pointer">
              <i className="fa fa-info-circle mr-2" aria-hidden="true"></i>{" "}
              About Gorakhpur
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLinkH;
