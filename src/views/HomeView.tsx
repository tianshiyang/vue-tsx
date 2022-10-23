import { defineComponent } from "vue";
import TheWelcome from "../components/TheWelcome.js";

export default defineComponent({
  name: "HomeView",
  setup() {
    return () => {
      return (
        <>
          <main>
            <TheWelcome />
          </main>
        </>
      );
    };
  },
});
