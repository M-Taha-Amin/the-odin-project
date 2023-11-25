import "./menu.css";
import BreakfastSection from "./Components/Breakfast.js";
import LunchSection from "./Components/Lunch.js";

function Menu() {
  const menuList = document.createElement("div");
  menuList.className = "container menu-list";
  menuList.appendChild(BreakfastSection());
  menuList.appendChild(LunchSection());
  return menuList;
}
export default Menu;
