import { defineStore } from "pinia";

// (id, object)
// the state object is where we can add the data, any data that you want globally avaialble to other components should be defined there

export default defineStore("modal", {
  state: () => ({
    isOpen: false,
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? "hidden" : "";
    },
  },
});
