// 🔥 Firebase SDKs (MODULE)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

// 🔐 AAPKA FIREBASE CONFIG (AS-IT-IS)
const firebaseConfig = {
  apiKey: "AIzaSyCSH7H2tE22KarKb5qb2Nr6H0V1Ok5O76c",
  authDomain: "bcps-b9470.firebaseapp.com",
  projectId: "bcps-b9470",
  storageBucket: "bcps-b9470.firebasestorage.app",
  messagingSenderId: "1036686596196",
  appId: "1:1036686596196:web:dcaf68ece5a45336912771"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔑 GOOGLE LOGIN BUTTON
const btn = document.getElementById("googleLoginBtn");
if (btn) {
  btn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        document.getElementById("msg").innerText = error.message;
      });
  });
}

// 🔒 PROTECT DASHBOARD
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("dashboard.html")) {
    if (!user) {
      window.location.href = "index.html";
    }
  }
});

