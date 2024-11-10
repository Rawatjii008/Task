import GarbageCollectordetails from "@/app/garbagecollecterdetails/garbagecollectordetails";
import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Cardbutton = () => {
  // useState hook to manage the card's visibility
  const [showCard, setShowCard] = useState(false);
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");

  // Function to toggle card visibility
  const toggleCard = () => setShowCard(!showCard);
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      {/* Button to toggle the card */}
      <button
        onClick={toggleCard}
        className="px-6 py-2 my-2 bg-cyan-950 text-white  font-semibold rounded-md hover:bg-cyan-700 n- transition duration-300"
      >
        {showCard ? "know your past history" : "know your past history"}
      </button>

      {/* The Card (visible when showCard is true) */}
      {showCard && (
        <div className="mt-8 w-full  p-6 bg-white shadow-lg rounded-lg">
          <div>
            {" "}
            <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-lg w-full lg:w-3/5 mx-auto">
              <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                <div className="flex flex-col w-full sm:w-1/2 mb-4 sm:mb-0">
                  <label className="mb-2 text-sm font-semibold text-gray-600">
                    Start Date:
                  </label>
                  <DatePicker
                    selected={StartDate}
                    onChange={(date) => setStartDate(date)}
                    className="p-2 border rounded w-full text-gray-700"
                    placeholderText="Select Start Date"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="mb-2 text-sm font-semibold text-gray-600">
                    End Date:
                  </label>
                  <DatePicker
                    selected={EndDate}
                    onChange={(date) => setEndDate(date)}
                    className="p-2 border rounded w-full text-gray-700"
                    placeholderText="Select End Date"
                  />
                </div>
              </div>
              <button className="mt-4 px-6 py-2 bg-cyan-950 text-white rounded-lg shadow hover:bg-cyan-700 transition-colors">
                Get History
              </button>
            </div>
          </div>
          <GarbageCollectordetails />
        </div>
      )}
    </div>
  );
};

export default Cardbutton;
