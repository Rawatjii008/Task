import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import React from "react";

const links = [
  {
    text: "ई-नगर सेवा",
    href: "https://e-nagarsewaup.gov.in/ulbappsmain/",
    imgSrc: "/enagarsewa-small.jpg",
  },
  {
    text: "जनसुनवाई पोर्टल / IGRS पोर्टल",
    href: "https://www.jansunwai.up.nic.in/login",
    imgSrc: "/Jan-sunvaye.png",
  },
  // {
  //   text: "IGRS पोर्टल",
  //   href: "https://www.jansunwai.up.nic.in/login",
  //   imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  // },
  {
    text: "नगर विकास विभाग",
    href: "https://urbandevelopment.up.nic.in/",
    imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  },
  {
    text: "निदेशक स्थानीय निकाय",
    href: "https://localbodies.up.nic.in/download-pdfs-two.html",
    imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  },
  {
    text: "स्वच्छ भारत मिशन (नगरीय)",
    href: "https://admin.sbmurban.org/u/login",
    imgSrc: "/swachhatam-approved-logo.png",
  },
  {
    text: "PM Svanidhi portal ",
    href: "https://pmsvanidhi.mohua.gov.in/",
    imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  },
  {
    text: "NIC बिजनौर",
    href: "https://bijnor.nic.in/",
    imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  },
  {
    text: "सिटी फाइनेंस पोर्टल",
    href: "https://cityfinance.in/login",
    imgSrc: "/city-finance-ranking.png",
  },
  {
    text: "ई-निविदा",
    href: "https://etender.up.nic.in/nicgep/app",
    imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  },
  {
    text: "जेम पोर्टल",
    href: "https://gem.gov.in/",
    imgSrc: "/gem-new-logo-v6.png",
  },
  {
    text: "पीएफएमएस पोर्टल",
    href: "https://pfms.nic.in/SitePages/Users/LoginDetails/Login.aspx",
    imgSrc: "/PFMS.png",
  },
  {
    text: "यूपीआरओडब्ल्यू",
    href: "https://uprow.in/",
    imgSrc: "/Seal_of_Uttar_Pradesh.svg",
  },
  {
    text: "सीआरएस पोर्टल जन्म/मृत्यु प्रमाणपत्र",
    href: "https://crsorgi.gov.in/web/index.php/auth/login",
    imgSrc: "/crs-logo.png",
  },
  {
    text: "अमृत",
    href: "https://amrut.mohua.gov.in/",
    imgSrc: "/amrut-logo.png",
  },
  { text: "ई वेतन", href: "https://ulb.uphq.in/", imgSrc: "/E-Vetan.png" },
  {
    text: "एनपीएस",
    href: "https://www.cra-nsdl.com/CRA/",
    imgSrc: "/NSDL-Logo.png",
  },
  {
    text: "PM SVANidhi beneficiaries Socio-Economics Profiling portal",
    href: "https://pmsvanidhi.qcin.org/account/login",
    imgSrc: "/PM-svanidhi-logo.png",
  },
];

const QuickLinks = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-4/5 mx-auto p-4">
          <h2 className="text-primary font-bold text-2xl text-center mb-2">
            QUICK LINKS
          </h2>
          <hr className="w-1/2 mx-auto mb-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {links.map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                <div className="w-full h-36 flex flex-col outline outline-offset-2 bg-white hover:bg-cyan-100 outline-blue-500 items-center rounded-lg shadow-lg justify-center border p-2 transition duration-300 ease-in-out delay-150 hover:text-black cursor-pointer">
                  <img
                    src={link.imgSrc}
                    alt={link.text}
                    className="mb-2 w-20 h-20 object-contain"
                  />
                  <span className="font-bold text-center mb-4">
                    {link.text}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
