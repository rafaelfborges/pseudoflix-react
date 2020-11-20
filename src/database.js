import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ_HRqz2eGesn9IwWq8YC6fG-kjLpBCt0",
  authDomain: "react-blog-401be.firebaseapp.com",
  databaseURL: "https://react-blog-401be.firebaseio.com",
  projectId: "react-blog-401be",
  storageBucket: "react-blog-401be.appspot.com",
  messagingSenderId: "638964636666",
  appId: "1:638964636666:web:e9bf63c56dad684241e243",
  measurementId: "G-FN9CJYRZQL",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

export default db;
