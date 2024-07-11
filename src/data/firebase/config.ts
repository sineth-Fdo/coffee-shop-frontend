
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBNvw7zt4ApXs4oTRkrOmWlH6lAE1kTPHM",
  authDomain: "coffeeshop-580b4.firebaseapp.com",
  projectId: "coffeeshop-580b4",
  storageBucket: "coffeeshop-580b4.appspot.com",
  messagingSenderId: "202397833019",
  appId: "1:202397833019:web:11215b5d5eb029abb8891e"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);