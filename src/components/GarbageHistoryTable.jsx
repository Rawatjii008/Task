// components/GarbageHistoryTable.js
import { useState, useEffect } from "react";
import axios from "axios";

const GarbageHistoryTable = () => {
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/api/get-garbage-history'); // Assuming a GET route for fetching
        setHistory(response.data.past_history);
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
    <table>
      <thead>
        <tr>
          <th>House ID</th>
          <th>Employee ID</th>
          <th>Garbage Collected</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {history.map((entry) => (
          <tr key={entry._id}>
            <td>{entry.house_id}</td>
            <td>{entry.employee_id}</td>
            <td>{entry.is_garabge_collected ? "Yes" : "No"}</td>
            <td>{entry.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GarbageHistoryTable;
