import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSH7H2tE22KarKb5qb2Nr6H0V1Ok5O76c",
  authDomain: "bcps-b9470.firebaseapp.com",
  projectId: "bcps-b9470",
  storageBucket: "bcps-b9470.firebasestorage.app",
  messagingSenderId: "1036686596196",
  appId: "1:1036686596196:web:dcaf68ece5a45336912771"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔑 WAIT FOR PAGE LOAD
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("googleLoginBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      signInWithRedirect(auth, provider);
    });
  }
});

// AFTER GOOGLE REDIRECT
getRedirectResult(auth).catch(() => {});

// PROTECT DASHBOARD
onAuthStateChanged(auth, (user) => {
  if (window.location.pathname.includes("dashboard.html")) {
    if (!user) {
      window.location.href = "index.html";
    }
  }
});
