// firestore.js
import app from "../firebase.js"; // firebase.js se import
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

export const db = getFirestore(app);