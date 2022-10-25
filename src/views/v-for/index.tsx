import { defineComponent } from "vue";

export default defineComponent({
  name: "v-for",
  setup() {
    const list = [
      {
        id: 1,
        name: "张三",
        age: 11,
      },
      {
        id: 2,
        name: "李四",
        age: 21,
      },
      {
        id: 3,
        name: "王五",
        age: 31,
      },
      {
        id: 4,
        name: "赵六",
        age: 41,
      },
    ];

    const handleLiClick = (item: { id: number; age: number; name: string }) => {
      alert(`姓名${item.name},年龄${item.age},id${item.id}`);
    };

    return () => {
      return (
        <>
          <ul>
            {list.map((res) => {
              if (res.id !== 2) {
                return (
                  <>
                    <li onClick={() => handleLiClick(res)}>{res.name}</li>
                  </>
                );
              }
            })}
          </ul>
        </>
      );
    };
  },
});
