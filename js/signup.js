

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
// import {
// getDatabase,
// get,
// ref,
// child,
// } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
// import {
// getAuth,
// signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// const firstName = document.getElementById("firstNameInp")
// console.log("🚀 ~ firstName:", firstName)
// const lastName = document.getElementById("lastNameInp")
// const email = document.getElementById("emailInp")
// const pass = document.getElementById("passInp")
// const signupBtn = document.getElementById("signupBtn")

// const dbRef = ref(database, "users")


// function signUp() {
//   console.log(firstName.value);
//   createUserWithEmailAndPassword(auth, email.value, pass.value)
//     .then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       console.log("🚀 ~ .then ~ user:", user)
//       user.displayName = `${firstName.value} ${lastName.value}`
//   //     // ...
//       console.log( user.displayName)
//       console.log(user.email);
      
//       set(ref(database, `users/${user.uid}`), {
//         firstName: firstName.value,
//         lastName: lastName.value
//       })
//       .then(() => {
//         console.log("User data set successfully");
//       })
//       .catch((error) => {
//         console.error("Error setting user data:", error.message);
//       });
      
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("🚀 ~ signUp ~ errorMessage:", error)
//       // ..
//     });
//   window.location.href = "login.html"
// }
// signupBtn.onclick = signUp()


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBgOZKUMWVEFo2373TkDuM93AXk0ZPqu80",
  authDomain: "iqra-website.firebaseapp.com",
  databaseURL: "https://iqra-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iqra-website",
  storageBucket: "iqra-website.appspot.com",
  messagingSenderId: "661515839246",
  appId: "1:661515839246:web:cb167ed9944db775e5195f",
  measurementId: "G-7GYGBKZ7QS"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let EmailInp = document.getElementById('emailInp')
let PassInp = document.getElementById('passwordInp');
let FnameInp = document.getElementById('fnameInp');
let LnameInp = document.getElementById('lnameInp');
let MainForm = document.getElementById('Mainform');

let RegisterUser = evt => {
evt.preventDefault();

createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
.then((credential) => {
set(ref(db, 'UserAuthList/' + credential.user.uid), {
firstname: FnameInp.value,
lastname: LnameInp.value
})
sessionStorage.setItem("user-creds", JSON.stringify(credential.user));
window.location.href = "userHome.html";
})
.catch((error) => {
alert(error.message);
console.log(error.code);
console.log(error.message);
})


}
MainForm.addEventListener('submit', RegisterUser)
