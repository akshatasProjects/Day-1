const inputField = document.getElementById("itemInput");
const addButton = document.getElementById("addItem");
const clearButton = document.getElementById("clearList");
const groceryListElement = document.getElementById("groceryList");

// Retrieve grocery items from localStorage or start with an empty array
let groceryData = JSON.parse(localStorage.getItem("groceryDataKey")) || [];
renderGroceryList();

// Add item on button click
addButton.addEventListener("click", () => {
  const inputValue = inputField.value.trim();
  if (inputValue) {
    groceryData.push({ name: inputValue, bought: false });
    localStorage.setItem("groceryDataKey", JSON.stringify(groceryData));
    inputField.value = "";
    renderGroceryList();
  }
});
// Clear the list
clearButton.addEventListener("click", () => {
  groceryData = [];
  localStorage.removeItem("groceryDataKey");
  renderGroceryList();
});

function renderGroceryList() {
  groceryListElement.innerHTML = "";

  // Sort items alphabetically by name
  groceryData.sort((a, b) => a.name.localeCompare(b.name));

  groceryData.forEach((groceryItem, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = groceryItem.name;

    if (groceryItem.bought) {
      listItem.classList.add("bought");
    }

    // Toggle "bought" status
    listItem.addEventListener("click", () => {
      groceryData[index].bought = !groceryData[index].bought;
      localStorage.setItem("groceryDataKey", JSON.stringify(groceryData));
      renderGroceryList();
    });
    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevents the toggle click
      groceryData.splice(index, 1);
      localStorage.setItem("groceryDataKey", JSON.stringify(groceryData));
      renderGroceryList();
    });

    listItem.appendChild(deleteButton);
    groceryListElement.appendChild(listItem);
  });
}
