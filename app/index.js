// import 'v4' from 'uuid' and assign it to a variable called 'uuid4' nonsense tbh
import { v4 as uuid4 } from "uuid";
import { sayHello } from "./util.js";

const catalog = [
  {
    id: "1",
    item: "Canned Beans",
    price: 3.99,
    category: "Food",
    quantity: 25,
  },
  {
    id: "2",
    item: "Shirts",
    price: 8.99,
    category: "Clothing",
    quantity: 50,
  },
  {
    id: "3",
    item: "Laptop",
    price: 599.99,
    category: "Electronics",
    quantity: 5,
  },
  {
    id: "4",
    item: "Samsung Galaxy s5",
    price: 699.99,
    category: "Electronics",
    quantity: 6,
  },
  {
    id: "5",
    item: "Pants",
    price: 10.99,
    category: "Clothing",
    quantity: 50,
  },
];

const user = {
  username: "larythetiger",
  cart: [],
};

// const catalogTotal = catalog.reduce(function (total, currentItem) {
//   return total + calculateTotal(currentItem.price, currentItem.quantity);
// }, 0);

// console.log(catalog, user);
// console.log(catalog[2].price.toFixed(2));
// toFixed(2) to get how many decimals you put in the ()

// function add2Numbers(num1, num2) {
//   return num1 + num2;
// }

// const total = add2Numbers(2, 4);
// console.log(total);

function calculateTotal(price, quantity) {
  return price * quantity;
}
// rewrite with arrow function idk what we doin'
// const calculateTotal = (price, quantity) => {return price * quantity}
// or
// const calculateTotal = (price, quantity) => price * quantity;

// const total = calculateTotal(599.99, 20);

// console.log(total.toFixed(2));

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < catalog.length; i++) {
//   console.log(catalog[i].item);
// }
// let catalogTotal = 0;

// for (let i = 0; i < catalog.length; i++) {
//   const price = catalog[i].price;
//   const quantity = catalog[i].quantity;
//   catalogTotal += calculateTotal(price, quantity);
// }

// console.log(catalogTotal);

// const itemsThatStartWithTheLetterA = catalog.filter(function (
//   currentCatalogItem
// ) {
//   return currentCatalogItem.item.startsWith("a");
// });
// rewrite for arrow functions
// const itemsThatStartWithTheLetterA = catalog.filter((currentCatalogItem) =>
//   currentCatalogItem.item.startsWith("a")
// );

// console.log(itemsThatStartWithTheLetterA);

// const clothingItems = catalog.filter(function (currentItem) {
//   return currentItem.category.toLowerCase() === "clothing";
// });

// rewrite for arrow functions
// const clothingItems = catalog.filter(
//   (currentItem) => currentItem.category.toLowerCase() === "clothing"
// );

// console.log(itemsThatStartWithTheLetterA, clothingItems);

const sayHello = (registeredUser) => `Hello, ${registeredUser.username}`;

// temporal literal
const help = (catalogItem) =>
  `
    <section>
    <h2>${catalogItem.item}</h2>
    <p>Price: $${catalogItem.price}</p>
    <p>Quantity: ${catalogItem.quantity}</p>
    <button> Add to Cart </button>
    </section>
  `;
// const firstItemCard = help(catalog[0]);

// console.log(firstItemCard);

// don't need join in react :)))))
const catalogHTMl = catalog.map(help).join("");
