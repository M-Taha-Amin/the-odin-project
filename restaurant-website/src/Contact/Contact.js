import "./contact.css";
import mapImg from "../assets/map.jpg";
function Contact() {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contactDiv");
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";
  const phoneNum = document.createElement("p");
  phoneNum.textContent = "Phone: 123 456 789";
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactInfo");
  contactInfo.appendChild(h1);
  contactInfo.appendChild(phoneNum);
  const contactImg = document.createElement("img");
  contactImg.classList.add("contactImg");
  contactImg.src = mapImg;
  const imgWrapper = document.createElement("div");
  imgWrapper.appendChild(contactImg);
  contactDiv.appendChild(contactInfo);
  contactDiv.appendChild(imgWrapper);
  return contactDiv;
}
export default Contact;
