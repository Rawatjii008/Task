import React from "react";
import { FaFacebookSquare, FaCaretRight, FaMapMarkerAlt } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { TfiTwitter, TfiEmail } from "react-icons/tfi";
import "../style/footer.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const LogoImage = "/MCD-IMAGE.png";
  const LogoImage1 = "/footer-nic-logo.svg";
  const LogoImage2 = "/cqw_logo.png";
  return (
    <>
      <div className="bg-primary flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full mb-3 md:mb-0 border-r border-dotted border-gray-300">
          <h3 className="text-white font-bold text-3xl m-6">Quick Links</h3>
          <div className="footer-widget m-5">
            <ul className="nav relative block text-sm text-white">
              <li className="nav-item relative block">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Site Map
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Photo Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Official Link
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Other Section
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Terms &
                  Conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#showFooter"
                >
                  <FaCaretRight className="inline-block mr-2" /> Website Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Help
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Feedback
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Video Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" /> Download
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link p-2 relative block hover:bg-white hover:text-blue-500"
                  href="#"
                >
                  <FaCaretRight className="inline-block mr-2" />{" "}
                  GIGW-Certificate
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 w-full mb-3 md:mb-0 border-r border-dotted border-gray-300">
          <h3 className="text-white font-bold text-3xl m-6">Address</h3>
          <div className="p-[6px]">
            <ul className="text-sm list-none text-white ">
              <li className="nav-item p-2">
                <Link href="#" className="nav-link flex items-start">
                  <span className="inline-block mr-2">
                    <FaMapMarkerAlt />
                  </span>
                  <span>
                    Content on this website is published and managed by Nagar
                    Palika Parishad Noorpur. Contents Provided by Nagar Palika
                    Parishad Noorpur, Bijnor.
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link flex items-start"
                  href="https://nppnoorpur.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-block mr-2">
                    <FaCaretRight />
                  </span>
                  <span>URL : https://nppnoorpur.org/</span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link href="#" className="nav-link flex items-start">
                  <span className="inline-block mr-2">
                    <FaCaretRight />
                  </span>
                  <span>
                    Mobile App : This mobile application is coming soon,
                    developed by Sest InfoTech Pvt. Ltd.
                  </span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link href="#" className="nav-link flex items-start">
                  <span className="inline-block mr-2">
                    <FaCaretRight />
                  </span>
                  <span>Helpline Number (CCR) : To be announced</span>
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link href="#" className="nav-link flex items-start">
                  <span className="inline-block mr-2">
                    <FaCaretRight />
                  </span>
                  <span>Email Id : nppnoorpur@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/3 w-full mb-3">
          <h3 className="text-white font-bold text-3xl m-6">Map</h3>
          <div className="w-full px-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111502.3727537925!2d78.31030991458965!3d29.15143389999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bbb6de6bf8e1b%3A0x5d542de8d2ff2316!2sNagar%20Palika%20Noorpur!5e0!3m2!1sen!2sin!4v1718084692245!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "1px solid #000" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-white p-5">
        <div className="w-11/12 mx-auto p-4">
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <div className="flex lg:justify-end justify-center">
              <div className="flex">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={LogoImage}
                    alt="MCD Logo"
                    width={48}
                    height={48}
                    className="bg-white"
                  />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={LogoImage1}
                    alt="Nic Logo"
                    width={48}
                    height={48}
                    className="ml-2"
                  />
                </Link>
              </div>
            </div>
            <div className=" text-center md:w-1/2 w-11/12">
              <p>
                Content on this website is published and managed by Nagar Palika
                Parishad Noorpur. Contents Provided by Nagar Palika Parishad
                Noorpur, Bijnor
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h6 className="font-bold">Follow Us</h6>
              <div className="flex gap-5 mt-7">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <FaFacebookSquare />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <GrInstagram />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <TfiTwitter />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Email"
                >
                  <TfiEmail />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
