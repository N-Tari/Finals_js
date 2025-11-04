import { burgerFnc } from "./burger.js";
burgerFnc();


let menuItems = [];

const container = document.getElementById("menuContainer");
const searchInput = document.getElementById("searchInput");

// Fetch GET Menu JSON
fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    menuItems = data;
    displayMenu(menuItems);
  })
  .catch(error => console.error("Error loading menu:", error));

// Display menu on page
function displayMenu(items) {
  container.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span>$${item.price.toFixed(2)}</span>
    `;
    container.appendChild(div);
  });
}

// Live search filter
searchInput.addEventListener("keyup", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = menuItems.filter(item =>
    item.name.toLowerCase().includes(keyword)
  );
  displayMenu(filtered);
});

