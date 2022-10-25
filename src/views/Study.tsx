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
    path: "class",
  },
  {
    name: "父子传值",
    path: "father-and-child",
  },
  {
    name: "插槽",
    path: "slot",
  },
  {
    name: "watch&computed",
    path: "watch-computed",
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
