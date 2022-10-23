import type { PropType } from "vue";

export const makeObjectProps = <T = Object>(defaultVal?: T) => ({
  type: Object as PropType<T>,
  default: defaultVal,
});

export const makeObjectArrayProps = <T = Object>(defaultVal?: T[]) => ({
  type: Array as unknown as PropType<T[]>,
  defaultVal: defaultVal,
});
