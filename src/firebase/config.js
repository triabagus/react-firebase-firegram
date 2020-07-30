import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaVvF6D_UfmM8xSJ1wc1FHR4q5xHrnUf8",
    authDomain: "tria-firegram.firebaseapp.com",
    databaseURL: "https://tria-firegram.firebaseio.com",
    projectId: "tria-firegram",
    storageBucket: "tria-firegram.appspot.com",
    messagingSenderId: "986095413534",
    appId: "1:986095413534:web:f5a65d689546bd2665810f"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  // Connect FireStore Database
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore};