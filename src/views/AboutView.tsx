import { defineComponent } from "vue";
import "./AboutView.css";

export default defineComponent({
  name: "AboutView",
  setup() {
    return () => {
      return (
        <>
          <div class="about">
            <h1>This is an about page</h1>
          </div>
        </>
      );
    };
  },
});
