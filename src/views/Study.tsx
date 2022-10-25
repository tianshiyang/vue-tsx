import { defineComponent } from "vue";
import Tabs from "@/components/tabs/index.js";

const tabsList = [
  {
    name: "vIf",
    path: "v-if",
  },
  {
    name: "vFor",
    path: "v-for",
  },
  {
    name: "动态class",
    path: "dynamic-class",
  },
  {
    name: "超级组件",
    path: "components-plus",
  },
];

export default defineComponent({
  name: "StudyView",
  components: {
    Tabs,
  },
  setup() {
    return () => {
      return (
        <>
          <Tabs tabsList={tabsList} />
        </>
      );
    };
  },
});
