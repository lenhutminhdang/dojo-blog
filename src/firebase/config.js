import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2FKa-RA39IXzsVMVrWTN6SlkrqVHXopA",
  authDomain: "vuejs-dojoblog.firebaseapp.com",
  projectId: "vuejs-dojoblog",
  storageBucket: "vuejs-dojoblog.appspot.com",
  messagingSenderId: "407444952205",
  appId: "1:407444952205:web:10e6224586aa6ddc3afec4",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
