"use client";
import Link from "next/link";
import React, { useState } from "react";

const OnlineServices = () => {
  const services = {
    "All Content": [
      { href: "/#", label: "State Admin", heading: "State Admin Dashboard" },
      {
        href: "/#",
        label: "Nagar Aayukt/EO Dashboard",
        heading: "Nagar Aayukt and EO Dashboard",
      },
      {
        href: "/#",
        label: "Property Tax",
        heading: "Property Tax Collection (Operator/CTAO)",
      },
      {
        href: "/#",
        label: "Property Mutation",
        heading: "Online Property Mutation Services for ULBs.",
      },
      {
        href: "/#",
        label: "Trade Licence",
        heading: "New and Renewal of Trade Licences",
      },
      {
        href: "/#",
        label: "Water/Sewerage Connection",
        heading: "Water and Sewerage Connection Services",
      },
      {
        href: "/#",
        label: "Signage/Advertisement",
        heading: "Signage Advertisement",
      },
      {
        href: "/#",
        label: "Piped Water Unavailability NOC",
        heading: "Piped Water Unavailability NOC from ULB",
      },
      { href: "/#", label: "Food NOC", heading: "Food NOC from ULB" },
      {
        href: "/#",
        label: "Online Fire Hydrant",
        heading: "Online Fire Hydrant from ULB",
      },
      {
        href: "/#",
        label: "Property Assessment",
        heading: "Assessment and Reassessment of Property",
      },
      {
        href: "/#",
        label: "Public Grievances",
        heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "भवन मानचित्र ",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "जन्म मृत्यु ",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "प्रमाण पत्र ",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "विभिन्न प्रकार की अनुमतियां",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
    ],
    "Citizen Centric": [
      { href: "/#", label: "State Admin", heading: "State Admin Dashboard" },
      {
        href: "/#",
        label: "Nagar Aayukt/EO Dashboard",
        heading: "Nagar Aayukt and EO Dashboard",
      },
      {
        href: "/#",
        label: "Property Tax",
        heading: "Property Tax Collection (Operator/CTAO)",
      },
      {
        href: "/#",
        label: "Property Mutation",
        heading: "Online Property Mutation Services for ULBs.",
      }
    ],
    Licensing: [
      {
        href: "/#",
        label: "Trade Licence",
        heading: "New and Renewal of Trade Licences",
      },
      {
        href: "/#",
        label: "Water/Sewerage Connection",
        heading: "Water and Sewerage Connection Services",
      },
      {
        href: "/#",
        label: "Signage/Advertisement",
        heading: "Signage Advertisement",
      },
      {
        href: "/#",
        label: "Piped Water Unavailability NOC",
        heading: "Piped Water Unavailability NOC from ULB",
      },
    ],
    "Public Utilities": [
      { href: "/#", label: "Food NOC", heading: "Food NOC from ULB" },
      {
        href: "/#",
        label: "Online Fire Hydrant",
        heading: "Online Fire Hydrant from ULB",
      },
      {
        href: "/#",
        label: "Property Assessment",
        heading: "Assessment and Reassessment of Property",
      },
      {
        href: "/#",
        label: "Public Grievances",
        heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "भवन मानचित्र ",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "जन्म मृत्यु ",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "प्रमाण पत्र ",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
      {
        href: "/#",
        label: "विभिन्न प्रकार की अनुमतियां",
        // heading: "DCCC/ Public Grievance Monitoring System",
      },
    ],
    Others: [
      {
        href: "/#",
        label: "Trade Licence",
        heading: "New and Renewal of Trade Licences",
      },
      {
        href: "/#",
        label: "Water/Sewerage Connection",
        heading: "Water and Sewerage Connection Services",
      },
      {
        href: "/#",
        label: "Signage/Advertisement",
        heading: "Signage Advertisement",
      },
      {
        href: "/#",
        label: "Piped Water Unavailability NOC",
        heading: "Piped Water Unavailability NOC from ULB",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(Object.keys(services)[0]);

  const renderContent = (content) => (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {content.map((item, index) => (
          <Link href={item.href} key={index} legacyBehavior>
            <div className="block p-4 bg-activetabs rounded-xl shadow hover:bg-activetabs transition duration-300 text-center">
              <div className="text-center text-xl font-semibold py-4 text-white flex items-center justify-center h-32">
                <h3 className="text-lg sm:text-xl text-white lg:text-xl">
                  {item.label}
                </h3>
              </div>
              <div className="text-center mt-4">
                <button className="w-32 px-1 py-2 bg-white  text-black border-2 text-lg  rounded-lg transition duration-300">
                  Proceed
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 border-b-2 border-gray-500">
          <div className="text-center py-2 text-2xl font-bold text-primary mt-5 uppercase">
            Online Services
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center mb-4">
            {Object.keys(services).map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${
                  activeTab === tab ? "bg-activetabs text-white" : "bg-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-4 border rounded">
            {renderContent(services[activeTab])}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineServices;
