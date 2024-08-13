import doctorService from "../assets/doctorService.svg";
import HealthService from "../assets/HealthService2.svg";
import hospitalService from "../assets/hospitalService.svg";
// Array with different background colors
const backgroundColors = [
  "bg-blue-50",
  "bg-gradient-to-tl from-blue-600 to-[#4ED6DA]",
  "bg-blue-50",
];

const textColors = ["text-black-500", "text-white-a700", "text-black-500"];
// const textColors = ["text-yellow-500", "text-purple-500", "text-pink-500"];

// Array with different text sizes
const textSizes = ["text-3xl", "text-3xl", "text-3xl"];

// bg-gradient-to-bl  from-amber-200 to-yellow-400
// Your service options list
export const serviceOptionLst = [
  {
    ServiceImg: doctorService,
    chatTtle: "Chat with doctor",
    descriptionText:
      "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered. ",
  },
  {
    ServiceImg: HealthService,
    chatTtle: "Health Store",
    descriptionText:
      "Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment ",
  },
  {
    ServiceImg: hospitalService,
    chatTtle: "Visit Hospitals",
    descriptionText:
      "Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time. ",
  },
];

// Function to add background and text colors to the service options
export const addStyles = (options) => {
  return options.map((option, index) => ({
    ...option,
    backgroundColor: backgroundColors[index % backgroundColors.length],
    textColor: textColors[index % textColors.length],
    textSize: textSizes[index % textSizes.length],
  }));
};

// Enhanced service options list with background and text colors
export const enhancedServiceOptionLst = addStyles(serviceOptionLst);
