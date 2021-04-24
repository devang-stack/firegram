import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpZ9DVLeRr75Mq5WlVZRQVgToPc_eqkrQ",
  authDomain: "firegram-66da9.firebaseapp.com",
  projectId: "firegram-66da9",
  storageBucket: "firegram-66da9.appspot.com",
  messagingSenderId: "449045213835",
  appId: "1:449045213835:web:1dd6f788f0def3756f5a8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };