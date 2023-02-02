// https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25063616#questions

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp4FKw7G74fwnCxnSLu6F94c_c4bUoIuI",
  authDomain: "music-82724.firebaseapp.com",
  projectId: "music-82724",
  storageBucket: "music-82724.appspot.com",
  messagingSenderId: "15345482650",
  appId: "1:15345482650:web:230ea50b1c40a4b1fcd823",
};

// Initialize Firebase and get a reference to the service - https://firebase.google.com/docs/web/setup?authuser=0&hl=es
const app = initializeApp(firebaseConfig);

// Initialize Auth and get a reference to the service - https://firebase.google.com/docs/auth/web/start
const auth = getAuth(app);

// Callback to avoid importing functions on the components from @firebase/auth
function createUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Initialize Cloud Firestore and get a reference to the service - https://firebase.google.com/docs/firestore/quickstart
const db = getFirestore(app);
const usersCollection = "users";

// Callback to avoid importing functions on the components from @firebase/firestore
function addDataToDB(uid, name, email, age, country) {
  // Insert document to the collection with the uid to connect Auth w/ DB

  return setDoc(doc(db, usersCollection, uid), {
    name,
    email,
    age,
    country,
  });
}

function updateUserProfile(user, displayName, photoURL) {
  return updateProfile(user, {
    displayName,
    photoURL,
  });
}

// https://firebase.google.com/docs/auth/web/password-auth
function authenticateUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
// Export references / functions
export {
  app,
  auth,
  createUser,
  addDataToDB,
  updateUserProfile,
  authenticateUser,
};

/* A bucket is a physical location where your data is stored. You can create multiple buckets if you are on a premium firebase plan.
Collections are objects in Firestore, records in a collection is the data stored in the DB
Documents are the individual records in  a collection, data stored in the DB
Multiple documents can be stored in a collection
*/
