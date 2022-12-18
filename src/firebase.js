import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDf_uEVrRyiD0zmxiXg0jg0Nd2OBLAWWDw",
  authDomain: "snapchat-clone-9fe61.firebaseapp.com",
  projectId: "snapchat-clone-9fe61",
  storageBucket: "snapchat-clone-9fe61.appspot.com",
  messagingSenderId: "79927973096",
  appId: "1:79927973096:web:28a377e4dcc73192c4e55d",
  measurementId: "G-0R85ZLS30Q"
};

const firebaseApp = firbase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider}