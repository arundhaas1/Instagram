import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAaUiHfzVmTb_sVgvrY8N2qnoIPiHNtKN8",
    authDomain: "instagram-cca2b.firebaseapp.com",
    projectId: "instagram-cca2b",
    storageBucket: "instagram-cca2b.appspot.com",
    messagingSenderId: "688550037194",
    appId: "1:688550037194:web:89cdb8aeddb7a47c7b1633",
    measurementId: "G-G6CXZDW213"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig )
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export default db;
  export {provider,storage,auth};