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

// const total = calculateTotal(599.99, 20);

// console.log(total.toFixed(2));

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < catalog.length; i++) {
//   console.log(catalog[i].item);
// }
let catalogTotal = 0;

for (let i = 0; i < catalog.length; i++) {
  const price = catalog[i].price;
  const quantity = catalog[i].quantity;
  catalogTotal += calculateTotal(price, quantity);
}

console.log(catalogTotal);
