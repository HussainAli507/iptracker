"use client";
import React, { useEffect, useState } from "react";

const AnalyticsTable = () => {
  const [visitorInfo, setVisitorInfo] = useState({
    ip: "Loading...",
    isp: "Loading...",
    browser: "Loading...",
    device: "Loading...",
    country: "Loading...",
  });

  useEffect(() => {
    fetch("/api/visitor")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setVisitorInfo(data))
      .catch((error) => {
        console.error("Error fetching visitor info:", error);
        setVisitorInfo({
          ip: "Error fetching IP",
          isp: "Error fetching ISP",
          browser: "Error fetching browser",
          device: "Error fetching device",
          country: "Error fetching country",
        });
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          OverAll Analytics
        </h1>
        <p className="text-center text-gray-600 mb-6">
          View the analytics of the visitors by country
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 text-left">Detail</th>
                <th className="py-2 px-4 text-left">Information</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100 odd:bg-gray-200">
                <td className="py-2 px-4">IP Address</td>
                <td className="py-2 px-4">{visitorInfo.ip}</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-gray-200">
                <td className="py-2 px-4">ISP</td>
                <td className="py-2 px-4">{visitorInfo.isp}</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-gray-200">
                <td className="py-2 px-4">Browser</td>
                <td className="py-2 px-4">{visitorInfo.browser}</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-gray-200">
                <td className="py-2 px-4">Device</td>
                <td className="py-2 px-4">{visitorInfo.device}</td>
              </tr>
              <tr className="bg-gray-100 odd:bg-gray-200">
                <td className="py-2 px-4">Country</td>
                <td className="py-2 px-4">{visitorInfo.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTable;
