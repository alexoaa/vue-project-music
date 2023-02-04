import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation.js";
import { auth } from "./includes/firebase";

import "./assets/base.css";
import "./assets/main.css";

//* We need to verify if the user was authenticated in in case the user refreshes the page, so we can keep the mem logged in and show the info
//* https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/learn/lecture/25063660#content

let app;

//? by storing the application in a variable, we can check if the app has already been initalized, if it already has we won't need to initialize it again

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount("#app");
  }
});
