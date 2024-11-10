"use client";
import MarqueeTag from "@/components/MarqueeTag";
import React, { useState } from "react";

const Notice = () => {
  const [activeTab, setActiveTab] = useState("Notice Board");
  const notices = [
    {
      date: "21 Jul 2024",
      title:
        "Sanitation and Waste Management: Collection, transportation, and disposal of solid waste, including garbage collection and maintaining cleanliness in public areas.",
    },
    {
      date: "18 Jul 2024",
      title:
        "Roads and Infrastructure Maintenance: Repair and maintenance of roads, streets, bridges, and other public infrastructure.",
    },
    {
      date: "30 Jul 2024",
      title:
        "Water Supply and Sewage: Provision of clean drinking water and management of sewage systems.",
    },
    {
      date: "05 Aug 2024",
      title:
        "Street Lighting: Installation and maintenance of street lights to ensure public safety and visibility during the night.",
    },
    {
      date: "12 Aug 2024",
      title:
        "Parks and Recreation Facilities: Maintenance of public parks, gardens, and recreational areas for the community's use.",
    },
    {
      date: "01 Oct 2024",
      title:
        "Community Development Programs: Initiatives aimed at improving the overall quality of life for residents, such as education programs, skill development, and poverty alleviation measures.",
    },
  ];
  const noticePress = [
    {
      date: "20 Aug 2024",
      title:
        "Urban Planning and Development: Regulation of land use, issuing building permits, and ensuring adherence to zoning regulations.",
    },
    {
      date: "27 Aug 2024",
      title:
        "Property Tax Collection: Assessment and collection of property taxes to fund municipal services and infrastructure projects.",
    },
    {
      date: "03 Sep 2024",
      title:
        "Public Health Services: Providing basic healthcare facilities, vaccination programs, and disease control measures.",
    },
    {
      date: "10 Sep 2024",
      title:
        "Disaster Management: Preparedness and response to natural disasters and emergencies within the municipality.",
    },
    {
      date: "17 Sep 2024",
      title:
        "Birth and Death Registration: Maintaining records of births and deaths within the jurisdiction for legal and administrative purposes.",
    },
    {
      date: "24 Sep 2024",
      title:
        "Issuing Licenses and Permits: Granting licenses for businesses, trades, and various activities, ensuring compliance with regulations.",
    },
  ];
  const budgetsection = [
    {
      date: "20 Aug 2024",
      title:
        "Urban Planning and Development: Regulation of land use, issuing building permits, and ensuring adherence to zoning regulations.",
      link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
    },
    {
      date: "27 Aug 2024",
      title:
        "Property Tax Collection: Assessment and collection of property taxes to fund municipal services and infrastructure projects.",
      link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
    },
    {
      date: "03 Sep 2024",
      title:
        "Public Health Services: Providing basic healthcare facilities, vaccination programs, and disease control measures.",
      link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
    },
    {
      date: "10 Sep 2024",
      title:
        "Disaster Management: Preparedness and response to natural disasters and emergencies within the municipality.",
      link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
    },
    {
      date: "17 Sep 2024",
      title:
        "Birth and Death Registration: Maintaining records of births and deaths within the jurisdiction for legal and administrative purposes.",
      link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
    },
    {
      date: "24 Sep 2024",
      title:
        "Issuing Licenses and Permits: Granting licenses for businesses, trades, and various activities, ensuring compliance with regulations.",
      link: "https://www.princexml.com/samples/invoice/invoicesample.pdf",
    },
  ];

  return (
    <>
      <MarqueeTag />
      <div className="container mx-auto mb-10 p-4 shadow-lg">
        <h2 className="text-primary font-bold uppercase border-b-2 pb-3 text-2xl text-center mb-4">
          Notice
        </h2>
        <div className="flex flex-wrap bg-cyan-950 p-5 justify-center rounded-lg mb-4">
          {["Notice Board", "Press Release", "Budget"].map(
            (tab, index) => (
              <button
                key={index}
                className={`py-1 px-4 mx-2 my-1 rounded ${
                  activeTab === tab
                    ? "bg-activetabs text-white"
                    : "bg-white text-black hover:bg-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div>
          {activeTab === "Notice Board" && <NoticeBoard notices={notices} />}
          {activeTab === "Press Release" && (
            <PressRelease noticePress={noticePress} />
          )}
          {activeTab === "Budget" && (
            <BudgetSection budgetsection={budgetsection} />
          )}
        </div>
      </div>
    </>
  );
};

const NoticeBoard = ({ notices }) => (
  <div className="p-4 h-96 overflow-y-auto">
    {notices.map((notice, index) => (
      <div key={index} className="mb-4 border border-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-teal-700 font-semibold">{notice.date}</span>
          <span className="text-red-600 font-semibold">
            <img src="https://uppsc.up.nic.in/assets/image/newicon.gif" />
          </span>
        </div>
        <div className="text-gray-700">{notice.title}</div>
      </div>
    ))}
  </div>
);

const PressRelease = ({ noticePress }) => (
  <div className="p-4 h-96 overflow-y-auto">
    {noticePress.map((notice, index) => (
      <div key={index} className="mb-4 border border-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-teal-700 font-semibold">{notice.date}</span>
          <span className="text-red-600 font-semibold">
            <img src="https://uppsc.up.nic.in/assets/image/newicon.gif" />
          </span>
        </div>
        <div className="text-gray-700">{notice.title}</div>
      </div>
    ))}
  </div>
);

const BudgetSection = ({ budgetsection }) => {
  const handleDownload = (link) => {
    // Create a temporary link element
    const tempLink = document.createElement("a");
    tempLink.href = link;
    tempLink.download = ""; // This will prompt a download
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <div className="p-4 h-96 overflow-y-auto">
      {budgetsection.map((notice, index) => (
        <div key={index} className="mb-4 border border-gray-200 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-teal-700 font-semibold">{notice.date}</span>
            <div className="flex space-x-2">
              <button
                className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => window.open(notice.link, "_blank")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
              </button>
              <button
                className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                onClick={() => handleDownload(notice.link)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="text-gray-700">{notice.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Notice;
