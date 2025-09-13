const menuContainer = document.querySelector('.menu-items');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

// Load menu items via AJAX (fetch API)
fetch('menu.json')
  .then(response => response.json())
  .then(menu => {
    menu.forEach(item => {
      const div = document.createElement('div');
      div.className = 'menu-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
      `;
      menuContainer.appendChild(div);
    });
  });

// Add to cart
function addToCart(itemId, itemName, itemPrice) {
  cart.push({ id: itemId, name: itemName, price: itemPrice });
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

// Contact form validation (unchanged)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert("❗ Please fill out all fields.");
    return;
  }

  alert(`✅ Thanks, ${name}! Your message has been sent.`);
  this.reset();
});
