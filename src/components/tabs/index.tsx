import { makeObjectArrayProps } from "@/utils/props";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import "./index.css";

interface TabsListItem {
  name: string;
  path: string;
}

export default defineComponent({
  name: "TabsNav",
  props: {
    tabsList: makeObjectArrayProps<TabsListItem>([]),
  },
  setup(props) {
    const router = useRouter();

    // 点击事件
    const handlTabsItemClick = (item: TabsListItem) => {
      router.push({
        path: item.path,
      });
    };

    return () => {
      return (
        <div class="tabs-nav">
          {props.tabsList?.map((item) => (
            <div class="tabs-item" onClick={() => handlTabsItemClick(item)}>
              {item.name}
            </div>
          ))}
        </div>
      );
    };
  },
});
