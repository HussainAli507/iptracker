import React from "react";

const data = [
  {
    ip: "152.58.78.10",
    city: "Mohali",
    region: "Punjab",
    country: "IN",
    postal: "140307",
    latitude: "30.674",
    longitude: "76.7249",
    timezone: "Asia/Kolkata",
    org: "Reliance Jio Infocomm Limited",
    visitCount: 3,
  },
  {
    ip: "54.254.162.138",
    city: "Singapore",
    region: "",
    country: "SG",
    postal: "068736",
    latitude: "1.2805",
    longitude: "103.848",
    timezone: "Asia/Singapore",
    org: "AMAZON-02",
    visitCount: 20,
  },
  {
    ip: "103.16.147.159",
    city: "Jalandhar",
    region: "Punjab",
    country: "IN",
    postal: "144301",
    latitude: "31.33",
    longitude: "75.5844",
    timezone: "Asia/Kolkata",
    org: "Five network Broadband Solution Pvt Ltd",
    visitCount: 5,
  },
  {
    ip: "152.58.79.44",
    city: "Mohali",
    region: "Punjab",
    country: "IN",
    postal: "140307",
    latitude: "30.674",
    longitude: "76.7249",
    timezone: "Asia/Kolkata",
    org: "Reliance Jio Infocomm Limited",
    visitCount: 1,
  },
  {
    ip: "106.221.101.52",
    city: "Chandigarh",
    region: "Chandigarh",
    country: "IN",
    postal: "160036",
    latitude: "30.7339",
    longitude: "76.7889",
    timezone: "Asia/Kolkata",
    org: "Bharti Airtel Ltd. AS for GPRS Service",
    visitCount: 1,
  },
  {
    ip: "152.58.106.248",
    city: "Chandigarh",
    region: "Chandigarh",
    country: "IN",
    postal: "160022",
    latitude: "30.7339",
    longitude: "76.7889",
    timezone: "Asia/Kolkata",
    org: "Reliance Jio Infocomm Limited",
    visitCount: 1,
  },
];

function IpAnalyticsTable() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        IP Analytics
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        View the IP details of the visitors
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                IP
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                City
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Region
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Country
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Postal
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Latitude
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Longitude
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Timezone
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Org
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Visit Count
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.ip}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.city}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.region}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.postal}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.latitude}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.longitude}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.timezone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.org}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.visitCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IpAnalyticsTable;
