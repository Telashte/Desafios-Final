import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDCjVu3u7HJbWr9jN9mZaaR6vHXC-5YJDA",
  authDomain: "desafios-20c76.firebaseapp.com",
  projectId: "desafios-20c76",
  storageBucket: "desafios-20c76.appspot.com",
  messagingSenderId: "914309598151",
  appId: "1:914309598151:web:7acd61552c05d8a34127e2",
  measurementId: "G-M5V7CZ7LBW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);