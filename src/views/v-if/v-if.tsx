import { defineComponent, ref } from "vue";
import "./v-if.css";

export default defineComponent({
  name: "v-if",
  setup() {
    const is_show = ref(true);

    const handleButtonClick = () => {
      is_show.value = !is_show.value;
    };

    const renderText = () => {
      return <div class="red-text">这是要显示的文案</div>;
    };

    const renderNoneText = () => {
      return "";
    };

    const renderButtonSectionHTML = () => {
      if (is_show.value) {
        return renderText();
      } else {
        return renderNoneText();
      }
    };

    return () => {
      return (
        <>
          <section>
            <button onClick={handleButtonClick}>
              点击{is_show.value ? "隐藏" : "显示"}
            </button>
            <div>{renderButtonSectionHTML()}</div>
          </section>
        </>
      );
    };
  },
});
