document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;
    const cart = [];
    
    // Dark mode toggle
    document.getElementById("darkModeToggle").addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  
    // Add to cart feature
    document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", function () {
        const product = this.getAttribute("data-product");
        const price = parseFloat(this.getAttribute("data-price"));
        
        cart.push({ product, price });
        cartCount++;
        
        // Update cart count in navbar
        document.getElementById("cartCount").textContent = cartCount;
        
        // Show checkout button if there are items in the cart
        if (cartCount > 0) {
          document.getElementById("checkoutBtn").style.display = "inline-block";
        }
      });
    });
  
    // Checkout functionality (clears cart)
    document.getElementById("checkoutBtn").addEventListener("click", function () {
      cart.length = 0; // Empty the cart array
      cartCount = 0;   // Reset cart count
      document.getElementById("cartCount").textContent = cartCount;
      document.getElementById("checkoutBtn").style.display = "none"; // Hide checkout button
      alert("Checkout successful! Thank you for your purchase.");
    });
  });

  // Initialize cart array to track added products
let cart = [];

// Function to update the cart count
function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  cartCount.textContent = cart.length; // Update the cart count
}

// Function to handle adding product to the cart
function addToCart(product, price) {
  cart.push({ product, price }); // Add product to the cart array
  updateCartCount(); // Update the cart count
  alert(`${product} has been added to your cart!`);
}

// Function to clear the cart
function clearCart() {
  cart = []; // Clear the cart array
  updateCartCount(); // Update the cart count
}

// Add event listeners for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const product = e.target.getAttribute("data-product");
    const price = parseFloat(e.target.getAttribute("data-price"));
    addToCart(product, price);
  });
});

// Checkout function to clear the cart on checkout
const checkoutButton = document.getElementById("checkoutBtn");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (cart.length > 0) {
      if (confirm("Are you sure you want to checkout and clear the cart?")) {
        clearCart();
        alert("Your cart has been cleared. Proceeding to checkout.");
      }
    } else {
      alert("Your cart is empty. Please add items before checkout.");
    }
  });
}

// Load the cart count on page load (in case of page reload)
document.addEventListener("DOMContentLoaded", updateCartCount);