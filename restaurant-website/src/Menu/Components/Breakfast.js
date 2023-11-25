import andaParatha from "../../assets/anda-paratha.jpeg";
import halwaPoori from "../../assets/halwa-poori.jpg";
import naan from "../../assets/naan.jpg";
import nihari from "../../assets/nihari.jpg";
import murghChanay from "../../assets/murgh-chanay.jpeg";
import chai from "../../assets/chai.jpg";
import MenuCard from "./MenuCard.js";

function BreakfastSection() {
  const breakfastSection = document.createElement("div");
  breakfastSection.className = "menu-section";
  const breakfastHeading = document.createElement("h2");
  breakfastHeading.className = "menu-heading breakfast-heading";
  breakfastHeading.textContent = "Break Fast";
  const breakfastMenu = document.createElement("div");
  breakfastMenu.className = "menu-grid";
  const breakfastMenuItems = [
    MenuCard("Anda Paratha", "60", andaParatha),
    MenuCard("Halwa Poori", "50/piece", halwaPoori),
    MenuCard("Naan", "30/piece", naan),
    MenuCard("Mutton Nihari", "300/plate", nihari),
    MenuCard("Murgh Chanay", "150/plate", murghChanay),
    MenuCard("Kadak Chai", "40", chai),
  ];
  breakfastSection.appendChild(breakfastHeading);
  breakfastSection.appendChild(breakfastMenu);
  breakfastMenuItems.forEach(item => breakfastMenu.appendChild(item));
  breakfastSection.appendChild(breakfastMenu);
  return breakfastSection;
}
export default BreakfastSection;
