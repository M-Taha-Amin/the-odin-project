import foodImg from "../assets/food.jpg";
import "./home.css";
function Home() {
  const heroDiv = document.createElement("div");
  heroDiv.className = "hero container";
  const heroText = document.createElement("p");
  heroText.classList.add("heroText");
  heroText.textContent = "Taste that has the power to bring people together!";
  heroDiv.appendChild(heroText);
  const heroImg = document.createElement("img");
  heroImg.classList.add("heroImg");
  heroImg.src = foodImg;
  heroDiv.appendChild(heroImg);
  return heroDiv;
}
export default Home;
