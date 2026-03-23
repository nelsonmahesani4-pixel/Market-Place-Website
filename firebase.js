// Import the functions you need from the SDKs you need
  import {  initializeApp,  } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_codG6SpF1H5uq0bcgcO8RVqtgMGpa0k",
    authDomain: "wma-smit-303eb.firebaseapp.com",
    projectId: "wma-smit-303eb",
    storageBucket: "wma-smit-303eb.firebasestorage.app",
    messagingSenderId: "51283725672",
    appId: "1:51283725672:web:594f3112a9719787f61add"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  import {
     getAuth,
        GoogleAuthProvider,
          signInWithPopup,

   } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
  export const auth = getAuth(app);
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
  export const db = getFirestore(app);
  export default app;
  const provider = new GoogleAuthProvider();
  export {
     provider,
      signInWithPopup, 

  } ;
   console.log("Firebase Initialized", app);
 console.log("Firebase Auth Initialized", auth)


 
 
  



