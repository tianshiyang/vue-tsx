import { defineComponent, ref } from "vue";
import "./index.css";

export default defineComponent({
  name: "dynamicClass",
  setup() {
    const greenStyle = ref(true);

    const buttonStyleClick = () => (greenStyle.value = !greenStyle.value);

    const isClass = ref(true);
    const className = ref("blackclass");

    const buttonClassClick = () => {
      isClass.value = !isClass.value;
      if (isClass.value) {
        className.value = "blackclass";
      } else {
        className.value = "blueclass";
      }
    };

    return () => {
      return (
        <>
          <section>
            <button onClick={buttonStyleClick}>改变动态style</button>
            <div style={{ color: greenStyle.value ? "red" : "green" }}>
              动态style
            </div>
          </section>

          <section>
            <button onClick={buttonClassClick}>改变动态Class</button>
            <div class={className.value}>动态class</div>
          </section>
        </>
      );
    };
  },
});
