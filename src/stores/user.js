import { defineStore } from "pinia";
import {
  createUser,
  addDataToDB,
  updateUserProfile,
} from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      //* Firebase Authentication - authenticating
      const userCredentials = await createUser(values.email, values.password);

      //*Firebase database - adding data
      addDataToDB(
        userCredentials.user.uid,
        values.name,
        values.email,
        values.age,
        values.country
      );

      await updateUserProfile(
        userCredentials.user,
        values.name,
        "https://imgs.search.brave.com/3oOZtWublzhyG5CtpHzpYw0pKjPJ25cItQzFArLB9eE/rs:fit:1080:1200:1/g:ce/aHR0cHM6Ly90aGVk/b2dtYW4ubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L0Nob3ctQ2hvdy0x/LTMuanBnP3g2MDQw/OQ"
      );

      //* Function to log the userCredentials since it's async
      async function a(as) {
        return console.log(`Users credentials: ${as}`);
      }
      await a(userCredentials);

      //* Updating state
      this.userLoggedIn = true;
    },
    async authenticate(values) {},
  },
});
