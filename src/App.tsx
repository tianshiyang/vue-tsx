import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.js";
import "./App.css";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return () => {
      return (
        <>
          <header>
            <img
              alt="Vue Logo"
              class="logo"
              src="./src/assets/logo.svg"
              width="125"
              height="125"
            />
          </header>
          <div class="wrapper">
            <HelloWorld msg="You did it!" />
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/study">Study</RouterLink>
            </nav>
          </div>
          <RouterView />
        </>
      );
    };
  },
});
