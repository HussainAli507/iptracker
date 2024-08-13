// export default async function handler(req, res) {
//   const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
//   const userAgent = req.headers["user-agent"];

//   const getBrowser = () => {
//     if (userAgent.indexOf("Firefox") > -1) {
//       return "Firefox";
//     } else if (userAgent.indexOf("Chrome") > -1) {
//       return "Chrome";
//     } else if (userAgent.indexOf("Safari") > -1) {
//       return "Safari";
//     } else if (userAgent.indexOf("Edge") > -1) {
//       return "Edge";
//     } else {
//       return "Unknown";
//     }
//   };

//   const getDevice = () => {
//     if (/Mobi|Android/i.test(userAgent)) {
//       return "Mobile";
//     }
//     return "Desktop";
//   };

//   // Fetching ISP and country data using ipapi
//   let isp = "Unknown ISP";
//   let country = "Unknown Country";

//   try {
//     const response = await fetch(`https://ipapi.co/${ip}/json/`);
//     const data = await response.json();
//     isp = data.org || "ISP Not Available";
//     country = data.country_name || "Country Not Available";
//   } catch (error) {
//     console.error("Error fetching geolocation data:", error);
//   }

//   res.status(200).json({
//     ip,
//     isp,
//     browser: getBrowser(),
//     device: getDevice(),
//     country,
//   });
// }

export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const userAgent = req.headers["user-agent"];

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

  const getDevice = () => {
    if (/Mobi|Android/i.test(userAgent)) {
      return "Mobile";
    }
    return "Desktop";
  };

  let isp = "Unknown ISP";
  let country = "Unknown Country";
  let city = "Unknown City";
  let region = "Unknown Region";
  let postal = "Unknown Postal";
  let latitude = "Unknown Latitude";
  let longitude = "Unknown Longitude";
  let timezone = "Unknown Timezone";
  let org = "Unknown Org";
  let visitCount = Math.floor(Math.random() * 100);

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    isp = data.org || "ISP Not Available";
    country = data.country_name || "Country Not Available";
    city = data.city || "City Not Available";
    region = data.region || "Region Not Available";
    postal = data.postal || "Postal Not Available";
    latitude = data.latitude || "Latitude Not Available";
    longitude = data.longitude || "Longitude Not Available";
    timezone = data.timezone || "Timezone Not Available";
    org = data.org || "Org Not Available";
  } catch (error) {
    console.error("Error fetching geolocation data:", error);
  }

  res.status(200).json({
    ip,
    isp,
    browser: getBrowser(),
    device: getDevice(),
    country,
    city,
    region,
    postal,
    latitude,
    longitude,
    timezone,
    org,
    visitCount,
  });
}
