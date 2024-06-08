// Function to collect and log browser data
export const collectBrowserData = () => {
  // User agent
  const userAgent = navigator.userAgent;

  // Browser name
  const browserName = getBrowserName(userAgent);

  // Device name
  const deviceName = getDeviceName(userAgent);

  // Screen resolution
  const screenResolution = `${window.screen.width}x${window.screen.height}`;

  // Timezone
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // Referrer URL
  const referrer = document.referrer;

  // Date
  const date = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Day 
  const day = new Date().getDay();

  // Time
  const time = new Date().toLocaleTimeString();
};

// Function to extract browser name from user agent string
export const getBrowserName = (userAgent: string) => {
  let browserName = "Unknown Browser";

  // Regular expressions to match common browsers
  if (userAgent.match(/Edge/i)) {
    browserName = 'Microsoft Edge';
  } else if (userAgent.match(/Chrome/i)) {
    browserName = 'Google Chrome';
  } else if (userAgent.match(/Safari/i)) {
    browserName = 'Safari';
  } else if (userAgent.match(/Firefox/i)) {
    browserName = 'Mozilla Firefox';
  } else if (userAgent.match(/Opera|OPR/i)) {
    browserName = 'Opera';
  } else if (userAgent.match(/Trident/i)) {
    browserName = 'Internet Explorer';
  }

  return browserName;
};

// Function to extract device name from user agent string
export const getDeviceName = (userAgent: string) => {
  let deviceName = 'Unknown Device';

  // Regular expressions to match common device types
  if (/iPhone|iPad|iPod/i.test(userAgent)) {
    deviceName = 'Apple Device';
  } else if (/Android/i.test(userAgent)) {
    deviceName = 'Android Device';
  } else if (/Windows Phone/i.test(userAgent)) {
    deviceName = 'Windows Phone';
  } else if (/Windows/i.test(userAgent)) {
    deviceName = 'Windows PC';
  } else if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
    deviceName = 'Macintosh';
  } else if (/Linux/i.test(userAgent)) {
    deviceName = 'Linux PC';
  }

  return deviceName;
};
