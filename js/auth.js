
// auth.js
import { auth , provider} from "../firebase.js"; 
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut ,
  onAuthStateChanged,
   GoogleAuthProvider,
    signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

var text = document.getElementById("text");
// Signup btn
const signupBtn = document.getElementById("signupBtn");
if(signupBtn)signupBtn.addEventListener("click", signup);

// Login btn
const signinBtn = document.getElementById("signinBtn");
if(signinBtn)signinBtn.addEventListener("click", login);

// Logout btn
const logoutBtn = document.getElementById("logoutBtn");
if(logoutBtn)logoutBtn.addEventListener("click", logout);

 // Continue With Google
      var googleBtn = document.getElementById("googleBtn");
      if(googleBtn)googleBtn.addEventListener("click", google);


//  Signup function
function signup() {
  const semail = document.getElementById("semail").value;
  const spassword = document.getElementById("spassword").value;

  createUserWithEmailAndPassword(auth, semail, spassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Signup successful! Welcome ");
      window.location = "login.html"; // redirect to index page //
      console.log("User signed up:", user);
        text.innerText = user.semail;
    text.style.color = "green";
    })
    .catch((error) => {
      alert(error.message);
    });
};
// Login function
function login() {
  const lemail = document.getElementById("lemail").value;
  const lpassword = document.getElementById("lpassword").value;

  // Check if not signup 
  if (lemail === "" || lpassword === "") {
    alert("Please Signup  first!");
    return;
  }

  signInWithEmailAndPassword(auth, lemail, lpassword)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Login successful! Welcome back ");
      console.log("User logged in:", user);
        text.innerText = user.lemail;
    text.style.color = "green";
    })
    .catch((error) => {
      alert(error.message);
    });
};
//  Logout function
function logout() {
  signOut(auth)
    .then(() => {
      alert("Logged out successfully!");
      window.location = "index.html"; // redirect to index page
    })
    .catch((error) => {
      alert(error.message);
    });
};
// Continue with Google function
function google() {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("User", user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });


}

// On reload, check if user is already logged in
      onAuthStateChanged(auth, (user) => {
  if (user) {
    text.innerText = user.email;
  } else {
    text.innerText = "Not logged in";
  }
});
