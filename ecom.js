const products = [
  {
    id: 1,
    name: "Red T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/200x150?text=Red+T-Shirt"
  },
  {
    id: 2,
    name: "Blue Jeans",
    price: 39.99,
    image: "https://via.placeholder.com/200x150?text=Blue+Jeans"
  },
  {
    id: 3,
    name: "Sneakers",
    price: 59.99,
    image: "https://via.placeholder.com/200x150?text=Sneakers"
  }
];

let cartCount = 0;

const productList = document.getElementById("product-list");
const cartCountSpan = document.getElementById("cart-count");

function addToCart() {
  cartCount++;
  cartCountSpan.textContent = cartCount;
}

function displayProducts() {
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart()">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

displayProducts();
