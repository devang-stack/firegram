import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqdFwpnmu6qS5OhV-7J2n-jdiH1r2lQUQ",
    authDomain: "devang-firegram.firebaseapp.com",
    projectId: "devang-firegram",
    storageBucket: "devang-firegram.appspot.com",
    messagingSenderId: "358249233820",
    appId: "1:358249233820:web:3872634306759f9e3c5c59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimeStamp;

export { projectStorage, projectFirestore, timeStamp };