import "./card.css";
function MenuCard(name, price, src) {
  const card = document.createElement("div");
  card.className = "card";
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "imgWrapper";
  const foodImg = document.createElement("img");
  foodImg.className = "foodImg";
  foodImg.src = src;
  imgWrapper.appendChild(foodImg);
  const foodName = document.createElement("p");
  foodName.className = "foodName";
  foodName.textContent = name;
  const foodPrice = document.createElement("p");
  foodPrice.className = "foodPrice";
  foodPrice.textContent = `Rs ${price}`;
  const foodDetail = document.createElement("div");
  foodDetail.className = "foodDetail";
  foodDetail.appendChild(foodName);
  foodDetail.appendChild(foodPrice);
  card.appendChild(imgWrapper);
  card.appendChild(foodDetail);
  return card;
}
export default MenuCard;
