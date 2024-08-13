import React from "react";

const AnalyticsTable = () => {
  const data = [
    { label: "totalRecords", count: 23 },
    { label: "totalCountries", count: 3 },
    { label: "totalOrgs", count: 8 },
    { label: "totalBrowsers", count: 3 },
    { label: "totalOS", count: 4 },
    { label: "totalDevices", count: 2 },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Org Analytics</h1>
        <p className="text-center text-gray-600 mb-6">
          View the analytics of the visitors by country
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 text-left">Overall Stats</th>
                <th className="py-2 px-4 text-left">Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-gray-100 odd:bg-gray-200">
                  <td className="py-2 px-4">{item.label}</td>
                  <td className="py-2 px-4">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTable;
