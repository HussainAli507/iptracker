export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const userAgent = req.headers["user-agent"];

  // Detecting browser
  const getBrowser = () => {
    if (userAgent.indexOf("Firefox") > -1) {
      return "Firefox";
    } else if (userAgent.indexOf("Chrome") > -1) {
      return "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "Safari";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "Edge";
    } else {
      return "Unknown";
    }
  };

  // Detecting device type
  const getDevice = () => {
    if (/Mobi|Android/i.test(userAgent)) {
      return "Mobile";
    }
    return "Desktop";
  };

  // Fetching ISP and country data using ipapi
  let isp = "Unknown ISP";
  let country = "Unknown Country";

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    isp = data.org || "ISP Not Available";
    country = data.country_name || "Country Not Available";
  } catch (error) {
    console.error("Error fetching geolocation data:", error);
  }

  res.status(200).json({
    ip,
    isp,
    browser: getBrowser(),
    device: getDevice(),
    country,
  });
}
