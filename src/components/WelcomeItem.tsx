import { defineComponent } from "vue";

export default defineComponent({
  name: "WelComeItem",
  setup(props, { slots }) {
    return () => {
      return (
        <>
          <div class="item">
            {/* 插槽写法一 */}
            <i>{slots.icon ? slots.icon() : null}</i>
          </div>
          <div class="details">
            {/* 插槽写法二 */}
            <h3>{slots.heading?.()}</h3>
            {slots.default?.()}
          </div>
        </>
      );
    };
  },
});
