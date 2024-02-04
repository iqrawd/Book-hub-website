
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
    import {
      getDatabase,
      get,
      ref,
      child,
    } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
    import {
      getAuth,
      signInWithEmailAndPassword,
    } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

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
    const dbref = ref(db);

    let EmailInp = document.getElementById("emailInp");
    let PassInp = document.getElementById("passwordInp");
    let MainForm = document.getElementById("MainForm");

    let SignInUser = (evt) => {
      evt.preventDefault();
      signInWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
        .then((credential) => {
          sessionStorage.setItem(
            "user-creds",
            JSON.stringify(credential.user)
          );
          window.location.href = "userHome.html";

        })

        .catch((error) => {
          alert(error.message);
          console.log(error.code);
          console.log(error.message);
        });
    };
    MainForm.addEventListener("submit", SignInUser);