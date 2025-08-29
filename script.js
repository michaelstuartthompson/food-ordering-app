// Menu data (this would eventually come from a server via AJAX)
const menu = [
  { id: 1, name: 'Burger', price: 5.99 },
  { id: 2, name: 'Pizza', price: 8.99 },
  { id: 3, name: 'Tacos', price: 6.49 }
];

const menuContainer = document.querySelector('.menu-items');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

// Display menu items
menu.forEach(item => {
  const div = document.createElement('div');
  div.className = 'menu-item';
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>$${item.price.toFixed(2)}</p>
    <button onclick="addToCart(${item.id})">Add to Cart</button>
  `;
  menuContainer.appendChild(div);
});

// Add to cart
function addToCart(itemId) {
  const item = menu.find(m => m.id === itemId);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total.toFixed(2);
}
// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("❗ Please fill out all fields.");
    return;
  }

  // Simulated AJAX form submission
  alert(`✅ Thanks, ${name}! Your message has been sent.`);
  this.reset();
});
