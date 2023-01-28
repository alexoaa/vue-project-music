// https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25063616#questions

import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp4FKw7G74fwnCxnSLu6F94c_c4bUoIuI",
  authDomain: "music-82724.firebaseapp.com",
  projectId: "music-82724",
  storageBucket: "music-82724.appspot.com",
  messagingSenderId: "15345482650",
  appId: "1:15345482650:web:230ea50b1c40a4b1fcd823",
};

export default firebase.initializeApp(firebaseConfig);
