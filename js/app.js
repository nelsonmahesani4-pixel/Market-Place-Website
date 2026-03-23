// app.js
import { createElement } from "react";
import { db } from "./firestore.js"; // Firestore alag file se import
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

// create a add to cart button with id cartBtn//

const cartBtn = document.getElementById("cartBtnLi");
cartBtn.addEventListener("click", productFunction());

function productFunction()  {

  const product = {
    name: "Nokia Headphones",
    price: "600000"
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to Cart ✅");
};

// Buy Now button
const buyBtn = document.querySelector(".buyBtn");
buyBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

productFunction();