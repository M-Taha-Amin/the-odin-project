import "./nav.css";
function Nav() {
  const navEl = document.createElement("nav");
  navEl.classList.add("container");
  const ul = document.createElement("ul");
  const homeLink = document.createElement("li");
  homeLink.textContent = "Home";
  const menuLink = document.createElement("li");
  menuLink.textContent = "Menu";
  const contactLink = document.createElement("li");
  contactLink.textContent = "Contact";
  ul.append(homeLink, menuLink, contactLink);
  navEl.appendChild(ul);
  return { navEl, homeLink, menuLink, contactLink };
}
export default Nav;
