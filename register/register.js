// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC75gk-OZgLn2hE_b1LeFD5BWljx6Kv8VA",
  authDomain: "fir-9fb39.firebaseapp.com",
  projectId: "fir-9fb39",
  storageBucket: "fir-9fb39.firebasestorage.app",
  messagingSenderId: "591389234395",
  appId: "1:591389234395:web:f8a69851f96edc87aae8fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//submit button

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("email").ariaValueMax;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMassage);
      // ..
    });
});

//another script
document.addEventListener("DOMContentLoaded", function () {
  const nameField = document.querySelector("#nameField input");
  const emailField = document.querySelector('input[type="email"]');
  const passwordField = document.querySelector('input[type="password"]');
  const signupBtn = document.getElementById("signupBtn");
  const signinBtn = document.getElementById("signinBtn");
  const title = document.getElementById("title");
  const nameContainer = document.getElementById("nameField");
  const inputGroup = document.querySelector(".input-group");

  let isSignUp = true;

  // გადართვა Sign In რეჟიმზე
  signinBtn.onclick = () => {
    isSignUp = false;
    nameContainer.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    inputGroup.style.height = "220px";
  };

  // გადართვა Sign Up რეჟიმზე
  signupBtn.onclick = () => {
    if (!isSignUp) {
      // ჯერ მხოლოდ ფორმის გადართვა
      isSignUp = true;
      nameContainer.style.maxHeight = "60px";
      title.innerHTML = "Sign Up";
      signupBtn.classList.remove("disable");
      signinBtn.classList.add("disable");
      inputGroup.style.height = "280px";
      return;
    }

    // Sign Up რეჟიმში მონაცემების დამუშავება
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value;

    if (!name || !email || !password) {
      alert("გთხოვ შეავსე ყველა ველი");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("რეგისტრაცია წარმატებით დასრულდა!");
  };

  // Sign In ღილაკზე რეგისტრირებული მონაცემების შემოწმება
  signinBtn.addEventListener("click", () => {
    if (isSignUp) return; // თუ ჯერ არ გადართულია

    const email = emailField.value.trim();
    const password = passwordField.value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      alert(`მოგესალმები, ${savedUser.name}!`);
    } else {
      alert("მომხმარებელი ვერ მოიძებნა ან პაროლი არასწორია");
    }
  });
});
