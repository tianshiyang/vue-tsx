import { defineComponent } from "vue";
import Tabs from "@/components/tabs/index.js";

const tabsList = [
  {
    name: "vIf",
    path: "",
  },
  {
    name: "vFor",
    path: "",
  },
  {
    name: "动态class",
    path: "",
  },
  {
    name: "父子传值",
    path: "",
  },
  {
    name: "插槽",
    path: "",
  },
  {
    name: "watch&computed",
    path: "",
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
