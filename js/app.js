// app.js
import { db } from "./firestore.js"; 
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// create a add to cart button with id cartBtn//

const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", productFunction);

function productFunction() {
  const product = {
    name: "Gift Boxes",
    price: "$19.99"
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + "Added to Cart ✅");
  console.log("Product added to cart:", product);
}

// product2
const cartBtn2 = document.getElementById("cartBtn2");

cartBtn2.addEventListener("click", productFunction2);

function productFunction2() {
  const product = {
    name: "BRAND Mockup",
    price: "$29.99"
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " Added to Cart ✅");
  console.log("Product added to cart:", product);
}

// product3
const cartBtn3 = document.getElementById("cartBtn3");

cartBtn3.addEventListener("click", productFunction3);

function productFunction3() {
  const product = {
    name: "shampoo",
    price: "$39.99"
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product.name + " Added to Cart ✅");
  console.log("Product added to cart:", product);
}

// remove cart items
const clearCartItem = document.getElementById("clrCart");
clearCartItem.addEventListener("click", function() {
  localStorage.removeItem("cart");
  alert("Cart cleared!");
  console.log("Cart cleared");
});

const clearCartItem2 = document.getElementById("clrCart2");
clearCartItem2.addEventListener("click", function() {
  localStorage.removeItem("cart");
  alert("Cart cleared!");
  console.log("Cart cleared");
});

const clearCartItem3 = document.getElementById("clrCart3");
clearCartItem3.addEventListener("click", function() {
  localStorage.removeItem("cart");
  alert("Cart cleared!");
  console.log("Cart cleared");
});

  

 