import { useExpose } from "@/utils/use-expose";
import { defineComponent, ref } from "vue";
import "./index.css";

export default defineComponent({
  name: "componentsPlus",
  props: {
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ["update:modelValue", "handleEventCallBack"],
  setup(props, { emit, slots }) {
    const renderSlot = () => {
      return (
        <button onClick={() => console.log("点击底部按钮")}>footer按钮</button>
      );
    };

    const count = ref(props.modelValue);

    const handleEmitCallback = () => {
      count.value++;
      emit("handleEventCallBack", "这是子组件给父组件的穿值");
      emit("update:modelValue", count.value);
    };

    const resetCount = () => {
      count.value = 0;
      emit("update:modelValue", count.value);
    };

    // 导出组件方法，可供父组件直接使用
    useExpose({
      resetCount,
    });

    return () => {
      return (
        <>
          <div class="content">
            <section>
              <div class="title">{props.title}</div>
            </section>
            <section>
              {slots.default?.({ name: "这是通过default槽位传递的数据" }) ||
                "没有默认插槽"}
            </section>
            <section>
              <div>modelValue的值{count.value}</div>
            </section>
            <section>
              <button onClick={handleEmitCallback}>触发事件回掉</button>
              {slots.footer?.() || renderSlot()}
            </section>
          </div>
        </>
      );
    };
  },
});
