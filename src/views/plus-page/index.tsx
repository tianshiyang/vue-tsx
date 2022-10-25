import { defineComponent, ref } from "vue";
import ComponentPlus from "@/components/componentPlus/componentPlus";

export default defineComponent({
  name: "plus-page",
  setup() {
    const slots = {
      default: (value: Record<"name", string>) => (
        <div>default插槽：{value.name}</div>
      ),
      footer: () => {
        return <button>footer</button>;
      },
    };

    const handleEventCallBack = (value: string) => {
      alert(value);
    };

    const ComponentsPlus = ref();

    const count = ref(10);

    const handleEventCildren = () => {
      ComponentsPlus.value.resetCount();
    };

    return () => {
      return (
        <>
          <div style={{ color: "red" }}>count: {count.value}</div>
          <ComponentPlus
            ref={ComponentsPlus}
            v-model={count.value}
            title="这是标题"
            v-slots={slots}
            onHandleEventCallBack={handleEventCallBack}
          />
          <button onClick={handleEventCildren}>父组件调用子组件方法</button>
        </>
      );
    };
  },
});
