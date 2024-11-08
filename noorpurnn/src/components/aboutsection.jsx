import Image from "next/image";
import React from "react";

function Aboutsection() {
  const aboutImage = "/aboutimage.jpg";
  return (
    <div className="flex flex-col md:flex-row h-auto p-10">
      <div className="h-96 overflow-y-auto w-full md:w-1/2 bg-gray-800 p-6 flex flex-col items-center space-y-4 text-white">
        <div className="text-3xl font-bold">
          <h1>About Us</h1>
        </div>
        <div className="w-full flex justify-center">
          <Image
            className="rounded-lg shadow-lg"
            src={aboutImage}
            alt="About us"
            width={500}
            height={300}
          />
        </div>
        <div className="text-center px-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus excepturi vitae iusto beatae dicta eius hic aliquid
            officiis quia praesentium?
          </p>
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="h-96 bg-stone-700 w-full md:w-1/2 overflow-y-auto px-6 py-4">
        <div className="mb-4 border-b border-gray-300 sticky top-0">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center text-white"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-100 hover:border-gray-200"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Profile
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 hover:hover:border-b-2 rounded-t-lg hover:text-gray-100 hover:border-gray-200"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Dashboard
              </button>
            </li>
            <li className="mr-2" role="presentation">
              <button
                className="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-100 hover:border-gray-200"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Settings
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block p-4 hover:border-b-2 rounded-t-lg hover:text-gray-100 hover:border-gray-200"
                id="contacts-tab"
                data-tabs-target="#contacts"
                type="button"
                role="tab"
                aria-controls="contacts"
                aria-selected="false"
              >
                Contacts
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className="hidden p-4 rounded-lg  text-white"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p className="text-sm bg-gray-800 mb-2 p-3 text-gray-300 rounded-md">
              This is some placeholder content for the
              <strong className="font-medium text-gray-100">
                Profile tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
            <p className="text-sm bg-gray-800 mb-2 p-3 text-gray-300 rounded-md">
              This is some placeholder content for the
              <strong className="font-medium text-gray-100">
                Profile tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
            <p className="text-sm bg-gray-800 mb-2 p-3 text-gray-300 rounded-md">
              This is some placeholder content for the
              <strong className="font-medium text-gray-100">
                Profile tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-800 text-white"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p className="text-sm text-gray-300">
              This is some placeholder content for the
              <strong className="font-medium text-gray-100">
                Dashboard tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-800 text-white"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p className="text-sm text-gray-300">
              This is some placeholder content for the
              <strong className="font-medium text-gray-100">
                Settings tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            className="hidden p-4 rounded-lg bg-gray-800 text-white"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p className="text-sm text-gray-300">
              This is some placeholder content for the
              <strong className="font-medium text-gray-100">
                Contacts tabs associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutsection;
