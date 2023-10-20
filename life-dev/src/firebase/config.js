import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDkLWCeHvdAXGgGUy_XM3Frd0OApSSV2c",
  authDomain: "lifedev-68014.firebaseapp.com",
  projectId: "lifedev-68014",
  storageBucket: "lifedev-68014.appspot.com",
  messagingSenderId: "76353243147",
  appId: "1:76353243147:web:69f26a90e43c01cd0d5f0e",
  measurementId: "G-R0SEB6QR80",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
