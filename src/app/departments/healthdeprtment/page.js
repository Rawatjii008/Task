"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { Modal } from "./Modal";

export const Modal = ({ show, onClose, department }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show || !department) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-full w-full md:max-w-2xl lg:max-w-4xl mx-4">
        <button onClick={onClose} className="absolute top-[-10px] text-gray-600 hover:text-gray-900 text-[34px] right-1">
          &times;
        </button>
        <Image
          src={department.imageUrl}
          alt={department.name}
          className="w-full h-40 sm:h-72 object-cover mb-4"
          width={900}
          height={900}
        />
        <h2 className="text-2xl font-bold mb-4">{department.name}</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3 sm:px-6">विभाग का नाम</th>
              <th scope="col" className="px-2 py-3 sm:px-6">कर्मचारी / प्रभारी का नाम पद नाम</th>
              <th scope="col" className="px-2 py-3 sm:px-6">पद नाम</th>
              <th scope="col" className="px-2 py-3 sm:px-6">मोबाईल नम्बर</th>
            </tr>
          </thead>
          <tbody>
            {department.data.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                <td className="px-2 py-4 sm:px-6">{row.department}</td>
                <td className="px-2 py-4 sm:px-6">{row.employee}</td>
                <td className="px-2 py-4 sm:px-6">{row.position}</td>
                <td className="px-2 py-4 sm:px-6">{row.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Page = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const departments = [
    {
      id: 1,
      name: "ट्रोमल प्लान्ट संचालन",
      description: "Responsible for city infrastructure and maintenance.",
      imageUrl: "/authorities.png",
      data: [
        {
          sno: 1,
          department: "ट्रोमल प्लान्ट संचालन",
          employee: "श्री ओमकार",
          position: "संविदा कर्मी",
          mobile: "9690512901",
        },
        {
          sno: 2,
          // department: "ट्रोमल प्लान्ट संचालन",
          employee: "श्री रवि घाघट",
          position: "करक सफाई नायक",
          mobile: "6395468611",
        },
      ],
    },
    {
      id: 2,
      name: "एम ० आर ० एफ ० केंद्र",
      description: "Ensures public health and cleanliness in the city.",
      imageUrl: "/Medical and Hopistal.png",
      data: [
        {
          sno: 3,
          department: "एम ० आर ० एफ ० केंद्र",
          employee: "श्री हिमांशु",
          position: "सुपरवाइजर",
          mobile: "8191012126",
        },
        {
          sno: 4,
          // department: "एम ० आर ० एफ ० केंद्र",
          employee: "श्री उमेश कुमार",
          position: "करक सफ़ाई नायक",
          mobile: "9756330436",
        },
      ],
    },
    {
      id: 3,
      name: "जन्म-मृत्यु",
      description: "Plans and regulates the city's growth and development.",
      imageUrl: "/transport.png",
      data: [
        {
          sno: 5,
          department: "जन्म-मृत्यु",
          employee: "श्री जगवीर सिंह",
          position: "लिपिक",
          mobile: "8445299865",
        },
        {
          sno: 6,
          // department: "जन्म-मृत्यु",
          employee: "श्री साबिर हुसैन",
          position: "कम्प्यूटर ऑपरेटर",
          mobile: "9719457179",
        },
      ],
    },
  ];

  const handleOpenModal = (department) => {
    setSelectedDepartment(department);
  };

  const handleCloseModal = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 uppercase text-primary text-center border-b-2 pb-4">स्वास्थ्य विभाग</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div
            key={department.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleOpenModal(department)}
          >
            <Image
              src={department.imageUrl}
              alt={department.name}
              className="w-full h-72 object-cover"
              width={900}
              height={900}
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{department.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <Modal show={!!selectedDepartment} onClose={handleCloseModal} department={selectedDepartment} />
    </div>
  );
};

export default Page;
