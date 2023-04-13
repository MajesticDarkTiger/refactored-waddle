import data from "./data.js";

const vegetables = data.filter(
  (currentItem) => currentItem.category.toLowerCase() === "vegetables"
);

const itemNames = data.map((item) => item.name);

// const item = ({ name }) =>
//   `
//   <div>
//     <p>Item: ${name}</p>
//   </div>
//   `;

// const nameOfEachItem = data.map(item).join("");

const categories = data.map((item) => item.category);

const itemPs = data.map((item) => {
  // No need to do the "=== true". It's implied.
  if (item.stocked) {
    return `<p>${item.name} - ${item.price}</p>`;
  }
  return "<p>Out of stock</p>";
});

// console.log(vegetables, itemNames, itemPs);

function createOptionForCategory(category) {
  return `<option value="${category.toLowerCase()}">${category}</option>`;
}

const uniqueCategories = [...new Set(categories)];

const selectCategories = `
<label for="categories">Categories</label>
<select name="categories" id="categories">
${categories.map(uniqueCategories).join("\n")}
</select>
`;

console.log(selectCategories);
