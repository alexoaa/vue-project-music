// https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25063616#questions

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

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
function addDataToDB(name, email, age, country) {
  console.log(collection(db, usersCollection));

  // Insert document to the collection
  return addDoc(collection(db, usersCollection), {
    name,
    email,
    age,
    country,
  });
}

// Export references / functions
export { app, createUser, addDataToDB };

/* A bucket is a physical location where your data is stored. You can create multiple buckets if you are on a premium firebase plan.
Collections are objects in Firestore, records in a collection is the data stored in the DB
Documents are the individual records in  a collection, data stored in the DB
Multiple documents can be stored in a collection
*/
