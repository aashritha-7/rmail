import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDoxRIXGN-aYj5g2ybUNq7QMG4JpaOaaUQ",
  authDomain: "rmail-59cfb.firebaseapp.com",
  projectId: "rmail-59cfb",
  storageBucket: "rmail-59cfb.appspot.com",
  messagingSenderId: "405433892930",
  appId: "1:405433892930:web:87f227c7074d3eead72ddb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

