// product.js
import { db } from "../firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const form = document.getElementById("productForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name1").value;
  const price = document.getElementById("price1").value;
  const desc = document.getElementById("desc1").value;

  try {
    await addDoc(collection(db, "products"), {
      name: name,
      price: price,
      description: desc,
      createdAt: new Date()
    });

    alert("Product Added Successfully ✅");
    form.reset();

console.log("Product added successfully!");
    console.log("Product Name:", name);
    console.log("Product Price:", price);
    console.log("Product Description:", desc);
  } catch (error) {
    console.error("Error:", error);
  }
});
// navar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});
