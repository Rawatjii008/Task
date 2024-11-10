// "use client";
// import Image from "next/image";
// import React from "react";

// const sections = [
//   {
//     title: "माननीय मुख्यमंत्री (उत्तर प्रदेश)",
//     imgSrc: "/team-1-1.jpg",
//     alt: "Chief Minister",
//     name: "श्री योगी आदित्यनाथ",
//   },
//   {
//     title: "माननीय नगर विकास मंत्री",
//     imgSrc: "/ak_sharma.jpg",
//     alt: "Mayor",
//     name: "श्री अरविंद कुमार शर्मा",
//   },
//   {
//     title: "नगर पालिका अध्यक्ष",
//     imgSrc: "/m2.jpg",
//     alt: "Municipal Commissioner",
//     name: "डॉ.महेंद्र प्रताप सिंह",
//   },
//   {
//     title: "नगर पालिका कार्यकारी अधिकारी",
//     imgSrc: "/m1.jpg",
//     alt: "Municipal Commissioner",
//     name: "श्री संतोष कुमार मिश्रा",
//   },
// ];

// function Sectionpeople() {
//   return (
//     <div className=" mt-32">
//       <h1 className=" text-primary font-bold border-b-2 mb-5 w-1/2 mx-auto uppercase text-2xl text-center ">
//         Members
//       </h1>

//       <div className="bg-slate-100  flex justify-center items-center md:px-32 flex-col h-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full ">
//           {sections.map((section, index) => (
//             <div
//               key={index}
//               className="section h-auto overflow-y-auto w-full flex flex-col justify-center items-center bg-white rounded-md shadow-lg "
//             >
//               <div className="h-20 text-red-700 flex justify-center items-center">
//                 <h1 className="border-b-2 font-bold border-slate-300 pb-2 text-lg text-center">
//                   {section.title}
//                 </h1>
//               </div>
//               <div>
//                 <Image
//                   className="h-80 w-96 hover:border-2 rounded-md"
//                   src={section.imgSrc}
//                   alt={section.alt}
//                   width={400}
//                   height={400}
//                 />
//               </div>
//               <div className="h-20 flex justify-center items-center">
//                 <h4 className="text-lg font-bold">{section.name}</h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sectionpeople;
import Image from "next/image";
import React from "react";

const sections = [
  {
    title: "माननीय मुख्यमंत्री (उत्तर प्रदेश)",
    imgSrc: "/team-1-1.jpg",
    alt: "Chief Minister",
    name: "श्री योगी आदित्यनाथ",
  },
  {
    title: "माननीय नगर विकास मंत्री",
    imgSrc: "/ak_sharma.jpg",
    alt: "Mayor",
    name: "श्री अरविंद कुमार शर्मा",
  },
  {
    title: "नगर पालिका अध्यक्ष",
    imgSrc: "/m2.jpg",
    alt: "Municipal Commissioner",
    name: "डॉ.महेंद्र प्रताप सिंह",
  },
  {
    title: "नगर पालिका जिला अधिकारी",
    imgSrc: "/DM Noorpur.jpeg",
    alt: "Municipal Commissioner",
    name: "श्री अंकित कुमार अग्रवाल ",
  },
  {
    title: "प्रभारी अधिकारी स्थानीय निकाय, बिजनौर",
    imgSrc: "/",
    alt: "Municipal Commissioner",
    name: "श्री ",
  },
  {
    title: "नगर पालिका कार्यकारी अधिकारी",
    imgSrc: "/m1.jpg",
    alt: "Municipal Commissioner",
    name: "श्री संतोष कुमार मिश्र",
  },
];

function Sectionpeople() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center border-b-2 border-black pb-4 text-primary mb-8 uppercase">
          Members
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-4">
                <p className="text-xl font-bold text-black text-center">
                  {section.title}
                </p>
              </div>
              <div className="flex justify-center  items-center h-72">
                <img
                  src={section.imgSrc}
                  alt={section.alt}
                  className="object-cover object-center h-full rounded-lg"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {section.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sectionpeople;
