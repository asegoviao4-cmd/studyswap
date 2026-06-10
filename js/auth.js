import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAEHwoa9Nns1PaBdodk-ktIFw2APHI9V60",
  authDomain: "studyswap-3d053.firebaseapp.com",
  projectId: "studyswap-3d053",
  storageBucket: "studyswap-3d053.firebasestorage.app",
  appId: "1:765373094250:web:17a86d99e1ba2a6dadad13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.registrar = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Usuario registrado correctamente");
  } catch (error) {
    alert(error.message);
  }
};

window.iniciarSesion = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Inicio de sesión correcto");
    window.location.href = "catalogo.html";
  } catch (error) {
    alert(error.message);
  }
};

window.cerrarSesion = async function () {
  try {
    await signOut(auth);
    window.location.href = "login.html";
  } catch (error) {
    alert(error.message);
  }
};
alert("AUTH CARGADO");