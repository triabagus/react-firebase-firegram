import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY_FIREBASE,
    authDomain: process.env.REACT_APP_AUTHDOMAIN_FIREBASE,
    databaseURL: process.env.REACT_APP_DATABASEURL_FIREBASE,
    projectId: process.env.REACT_APP_PROJECTID_FIREBASE,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET_FIREBASE,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID_FIREBASE,
    appId: process.env.REACT_APP_APPID_FIREBASE
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  // Connect FireStore Database
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp; // tipe data timestamp khusus dari firebase

export { projectStorage, projectFirestore, timeStamp};