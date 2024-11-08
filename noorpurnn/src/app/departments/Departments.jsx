"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Modal Component
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
              {/* <th scope="col" className="px-2 py-3 sm:px-6">
                क्र०सं०
              </th> */}
              <th scope="col" className="px-2 py-3 sm:px-6">
                विभाग का नाम
              </th>
              <th scope="col" className="px-2 py-3 sm:px-6">
                कर्मचारी / प्रभारी का नाम पद नाम
              </th>
              <th scope="col" className="px-2 py-3 sm:px-6">
                पद नाम
              </th>
              <th scope="col" className="px-2 py-3 sm:px-6">
                मोबाईल नम्बर
              </th>
            </tr>
          </thead>
          <tbody>
            {department.data.map((row, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900"
              >
                {/* <td className="px-2 py-4 sm:px-6">{row.sno}</td> */}
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
// Departments Component with dynamic array
const Departments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const departments = [
    {
      id: 1,
      name: "लेखा, वेतन एवं ऑडिट विभाग",
      description: "Responsible for city infrastructure and maintenance.",
      imageUrl: "/authorities.png",
      data: [
        {
          sno: 1,
          department: "लेखा, वेतन व ऑडिट विभाग",
          employee: "श्री वीर सिंह",
          position: "लिपिक",
          mobile: "9719457179",
        },
        {
          sno: 2,
          // department: "लेखा, वेतन व ऑडिट विभाग",
          employee: "श्री मौ० नासिर",
          position: "कम्प्यूटर ऑपरेटर",
          mobile: "9719670303",
        },
      ],
    },
    {
      id: 2,
      name: "स्वास्थ्य विभाग",
      description: "Ensures public health and cleanliness in the city.",
      imageUrl: "/Medical and Hopistal.png",
      link: "departments/healthdeprtment",
      data: [
        {
          sno: 3,
          department: "स्वास्थ्य विभाग",
          employee: "श्री वीर सिंह",
          position: "लिपिक",
          mobile: "9719457179",
        },
        // {
        //   sno: 4,
        //   // department: "स्वास्थ्य विभाग",
        //   employee: "श्री गुरप्रीत सिंह",
        //   position: "कम्प्यूटर ऑपरेटर",
        //   mobile: "8810008100",
        // },
      ],
    },
    {
      id: 3,
      name: "जलकल विभाग",
      description: "Plans and regulates the city's growth and development.",
      imageUrl: "/transport.png",
      data: [
        {
          sno: 5,
          department: "जलकल विभाग",
          employee: "श्री राजवीर सिंह",
          position: "पम्प चालक",
          mobile: "7451924951",
        },
        {
          sno: 6,
          // department: "जलकल विभाग",
          employee: "श्री दीपक शर्मा",
          position: "कम्प्यूटर ऑपरेटर",
          mobile: "9720221212",
        },
      ],
    },
    {
      id: 4,
      name: "सम्पत्ति / कर आरोपण / नामन्तरण विभाग",
      description: "Handles financial matters and administrative functions.",
      imageUrl: "/Finance and legal department.png",
      data: [
        {
          sno: 7,
          department: "सम्पत्ति / कर आरोपण / नामन्तरण विभाग",
          employee: "श्री जगवीर सिंह",
          position: "लिपिक",
          mobile: "8445299865",
        },
        // {
        //   sno: 8,
        //   department: "सम्पत्ति / कर आरोपण / नामन्तरण विभाग",
        //   employee: "श्री ओमकार",
        //   position: "संविदा कर्मी",
        //   mobile: "9690512901",
        // },
        // {
        //   sno: 9,
        //   department: "सम्पत्ति / कर आरोपण / नामन्तरण विभाग",
        //   employee: "श्री हिमांशु",
        //   position: "संविदा कर्मी",
        //   mobile: "8191012126",
        // },
      ],
    },
    {
      id: 5,
      name: "पथ प्रकाश विभाग",
      description: "Oversees educational facilities and services.",
      imageUrl: "/Education.png",
      data: [
        {
          sno: 10,
          department: "पथ प्रकाश विभाग",
          employee: "श्री जगवीर सिंह",
          position: "लिपिक",
          mobile: "8445299865",
        },
        // {
        //   sno: 11,
        //   // department: "पथ प्रकाश विभाग",
        //   employee: "श्री जगवीर सिंह",
        //   position: "लिपिक",
        //   mobile: "8445299865",
        // },
        // {
        //   sno: 12,
        //   // department: "पथ प्रकाश विभाग",
        //   employee: "श्री सागर हुसैन",
        //   position: "लिपिक",
        //   mobile: "9719457179",
        // },
      ],
    },
    {
      id: 6,
      name: "कान्हा गौशाला संचालन",
      description: "Manages public transport and traffic regulations.",
      imageUrl: "/art and culture.png",
      data: [
        // {
        //   sno: 13,
        //   department: "गौशाला संचालन",
        //   employee: "श्री जगवीर सिंह",
        //   position: "लिपिक",
        //   mobile: "8445299865",
        // },
        {
          sno: 14,
          department: "कान्हा गौशाला संचालन",
          employee: "श्री वीर सिंह",
          position: "लिपिक",
          mobile: "9719457179",
        },
      ],
    },
    {
      id: 7,
      name: "निर्माण विभाग",
      description: "Ensures clean and safe water supply to the city.",
      imageUrl: "/housing and land department.png",
      data: [
        {
          sno: 15,
          department: "निर्माण विभाग",
          employee: "श्री वीर सिंह",
          position: "लिपिक",
          mobile: "9719457179",
        },
        {
          // sno: 15,
          // department: "निर्माण विभाग",
          employee: "श्री गुरप्रीत सिंह",
          position: "कम्प्यूटर ऑपरेटर",
          mobile: "8810008100",
        },
      ],
    },
    // {
    //   id: 8,
    //   name: "ट्रोमल प्लान्ट संचालन",
    //   description: "Ensures clean and safe water supply to the city.",
    //   imageUrl: "/housing and land department.png",
    //   data: [
    //     {
    //       sno: 16,
    //       department: "ट्रोमल प्लान्ट संचालन",
    //       employee: "श्री वीर सिंह",
    //       position: "लिपिक",
    //       mobile: "9719457179",
    //     },
    //   ],
    // },
    // {
    //   id: 9,
    //   name: "एम० आर० एफ० केंद्र",
    //   description: "Ensures clean and safe water supply to the city.",
    //   imageUrl: "/housing and land department.png",
    //   data: [
    //     {
    //       sno: 17,
    //       department: "एम० आर० एफ० केंद्र",
    //       employee: "श्री वीर सिंह",
    //       position: "लिपिक",
    //       mobile: "9719457179",
    //     },
    //   ],
    // },
  ];
  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
    setShowModal(true);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 uppercase text-primary text-center border-b-2 pb-4">Departments in Nagar Nigam</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((department) => (
          <div
            key={department.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleDepartmentClick(department)}
          >
            {department.id === 2 ? (
              <Link href={`/${department.link}`}>
                <>
                  <Image
                    src={department.imageUrl}
                    alt={department.name}
                    className="w-full h-72 object-cover"
                    width={900}
                    height={900}
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">{department.name}</h2>
                    {/* <p className="text-gray-600">{department.description}</p> */}
                  </div>
                </>
              </Link>
            ) : (
              <>
                <Image
                  src={department.imageUrl}
                  alt={department.name}
                  className="w-full h-72 object-cover"
                  width={900}
                  height={900}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{department.name}</h2>
                  {/* <p className="text-gray-600">{department.description}</p> */}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        department={selectedDepartment}
      />
    </div>
  );
};

export default Departments;