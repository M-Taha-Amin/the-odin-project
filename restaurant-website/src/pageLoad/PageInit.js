import Home from "../Home/Home.js";
import Menu from "../Menu/Menu.js";
import Contact from "../Contact/Contact.js";
import Nav from "../Nav/Nav.js";

const content = document.getElementById("content");
const { navEl, homeLink, menuLink, contactLink } = new Nav();
content.appendChild(navEl);

let page = "home";
let contentValue = getContent(page);
content.appendChild(contentValue);

homeLink.addEventListener("click", () => {
  setContent("home");
  setActive(homeLink);
});
menuLink.addEventListener("click", () => {
  setContent("menu");
  setActive(menuLink);
});
contactLink.addEventListener("click", () => {
  setContent("contact");
  setActive(contactLink);
});

function getContent(page) {
  let content;
  if (page === "home") content = Home();
  else if (page === "menu") content = Menu();
  else if (page === "contact") content = Contact();
  return content;
}

function setActive(clickedLink) {
  clickedLink.classList.add("active");
  const allLinks = [homeLink, menuLink, contactLink];
  allLinks
    .filter(link => link !== clickedLink)
    .forEach(link => link.classList.remove("active"));
}

function setContent(pageName) {
  content.removeChild(contentValue);
  page = pageName;
  contentValue = getContent(pageName);
  content.appendChild(contentValue);
}
