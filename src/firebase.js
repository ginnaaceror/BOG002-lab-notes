import firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp ({
      apiKey: "AIzaSyAU0oDvJh3mv0ViKVrGLt5YeJDpOyjFdgA",
      authDomain: "quickly-notes-7002e.firebaseapp.com",
      projectId: "quickly-notes-7002e",
      storageBucket: "quickly-notes-7002e.appspot.com",
      messagingSenderId: "970607695770",
      appId: "1:970607695770:web:a830b2c726301191814c23"
  });
  
  export default app;