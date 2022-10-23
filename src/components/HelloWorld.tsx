import { defineComponent } from "vue";
import "./HelloWorld.css";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
    },
  },
  setup(props) {
    return () => {
      return (
        <>
          <div class="greetings">
            <h1 class="green">{props.msg}</h1>
          </div>
          <h3>
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">
              Vite
            </a>{" "}
            +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">
              Vue 3
            </a>
            . What's next?
          </h3>
        </>
      );
    };
  },
});
