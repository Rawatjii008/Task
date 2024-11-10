'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { httpService } from "@/helper/apiservices/httpserivce";


const GarbageHistoryTable = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${httpService}/user/past-history`)  
        setHistory(response.data.past_histories);
      } catch (error) {
        setError("Failed to load history.");
        console.error(error);
      }
    };
    fetchHistory();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <table className="m-5 overflow-x-scroll mx-auto">
      <thead className=" leading-normal mx-6">
        <tr>
          <th className="px-5 py-3 w-auto border-b-2 border-gray-200 border-2 bg-primary text-left text-lg font-semibold text-white uppercase tracking-wider">House ID</th>
          <th className="px-5 py-3 w-auto border-b-2 border-gray-200 border-2 bg-primary text-left text-lg font-semibold text-white uppercase tracking-wider">Employee ID</th>
          <th className="px-5 py-3 w-auto border-b-2 border-gray-200 border-2 bg-primary text-left text-lg font-semibold text-white uppercase tracking-wider">Garbage Collected</th>
          <th className="px-5 py-3 w-auto border-b-2 border-gray-200 border-2 bg-primary text-left text-lg font-semibold text-white uppercase tracking-wider">Message</th>
        </tr>
      </thead>
      <tbody>
        {history.map((entry) => (
          <tr key={entry._id}>
            <td className="px-5 py-4 border-b border-gray-200 border-2 bg-white text-sm font-medium text-gray-800">{entry.house_id}</td>
            <td className="px-5 py-4 border-b border-gray-200 border-2 bg-white text-sm font-medium text-gray-800">{entry.employee_id}</td>
            <td className="px-5 py-4 flex justify-center border-b border-gray-200 border-2 bg-white text-sm font-medium text-gray-800">{entry.is_garabge_collected ? "Yes" : "No"}</td>
            <td className="px-5 py-4 border-b border-gray-200 border-2 bg-white text-sm font-medium text-gray-800">{entry.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GarbageHistoryTable;
