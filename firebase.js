import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAEHwoa9Nns1PaBdodk-ktIFw2APHI9V60",
    authDomain: "studyswap-3d053.firebaseapp.com",
    projectId: "studyswap-3d053",
    storageBucket: "studyswap-3d053.firebasestorage.app",
    appId: "1:765373094250:web:17a86d99e1ba2a6dadad13"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase conectado");

window.guardarMaterial = async function(material) {
    try {
        await addDoc(collection(db, "materiales"), material);
        alert("Material publicado correctamente");
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

window.obtenerMateriales = async function() {
    const snapshot = await getDocs(collection(db, "materiales"));

    let materiales = [];

    snapshot.forEach((doc) => {
        materiales.push(doc.data());
    });
console.log(materiales);
    return materiales;
}
export { app };