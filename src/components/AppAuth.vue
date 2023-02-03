<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="hiddenCl">
    <div
      class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>

            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click="modalVisibility = false"
            >
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                  'hover:text-blue-600': tab === 'register',
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'register',
                  'hover:text-blue-600': tab === 'login',
                }"
                >Register</a
              >
            </li>
          </ul>

          <!-- The submit event will do 2 things, it'll enforce the validation before running the function we have in the expression. If the validation fails in any of the fields, it will not run the expression.
          Secondly, it'll prevent the page from refreshing when the form is submitted. -->

          <!-- Login Form -->
          <AppLoginForm v-if="tab === 'login'"></AppLoginForm>

          <!-- Registration Form -->
          <AppRegisterForm v-if="tab === 'register'"></AppRegisterForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapWritableState } from "pinia";
import useModalStore from "@/stores/modal";
import AppLoginForm from "./LoginForm.vue";
import AppRegisterForm from "./RegisterForm.vue";

export default {
  name: "AppAuth",
  components: {
    AppLoginForm,
    AppRegisterForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
  computed: {
    ...mapState(useModalStore, ["hiddenClass"]),
    // ...mapWritableState(useModalStore, [ "isOpen" ]),
    ...mapWritableState(useModalStore, { modalVisibility: "isOpen" }),
    hiddenCl() {
      return !this.modalVisibility ? "hidden" : "";
    },
  },
  methods: {},
};
</script>
<!-- Multiple options for interafcting with the state
directly with the isOpen property and using a computed pro, or toggling using the hiddenClass from the modal 

Renaming a state property from the store may not always be practical.
If your state property is being used across several components, those components would need to be updated.
Rather than going on a wild goose chase, you can rename a state property from within a component byvusing an alias.

We can Aliases the state properties to be more specific, in this case using an objects a 2nd argument, the property name will represent the name of the state property and the value reference the state property that we mapped and will be renamed.

By using an alias, we do not need to modify the store, nor do we need to update components outside of the Auth component. 
Only the Auth component is affected by the renaming.

-->
