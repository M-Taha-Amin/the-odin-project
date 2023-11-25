import MenuCard from "./MenuCard.js";
import haleem from "../../assets/haleem.jpg";
import chickenQarahi from "../../assets/chicken-qarahi.jpg";
import dalChawal from "../../assets/dal-chawal.jpeg";
import sabzi from "../../assets/sabzi.jpeg";
import roti from "../../assets/roti.jpg";
import biryani from "../../assets/biryani.png";

function LunchSection() {
  const lunchSection = document.createElement("div");
  lunchSection.className = "menu-section";
  const lunchHeading = document.createElement("h2");
  lunchHeading.className = "menu-heading lunch-heading";
  lunchHeading.textContent = "Lunch";
  const lunchMenu = document.createElement("div");
  lunchMenu.className = "menu-grid";
  const lunchMenuItems = [
    MenuCard("Haleem", "150/plate", haleem),
    MenuCard("Chicken Qarahi", "600/0.5kg", chickenQarahi),
    MenuCard("Daal Chawal", "120/plate", dalChawal),
    MenuCard("Mix Sabzi", "70/plate", sabzi),
    MenuCard("Tandori Roti", "10/piece", roti),
    MenuCard("Biryani", "250/plate", biryani),
  ];
  lunchSection.appendChild(lunchHeading);
  lunchSection.appendChild(lunchMenu);
  lunchMenuItems.forEach(item => lunchMenu.appendChild(item));
  lunchSection.appendChild(lunchMenu);
  return lunchSection;
}
export default LunchSection;
