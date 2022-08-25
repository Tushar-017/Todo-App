import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq_I8eFNpUXkwh4fdUoxOFr9yqod-FhyI",
  authDomain: "todo-app-328f8.firebaseapp.com",
  projectId: "todo-app-328f8",
  storageBucket: "todo-app-328f8.appspot.com",
  messagingSenderId: "543684441352",
  appId: "1:543684441352:web:9688309bd5feb8d64b28bd"
};

firebase.initializeApp(firebaseConfig)

export default firebase; 
