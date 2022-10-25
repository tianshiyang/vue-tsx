import { getCurrentInstance } from "vue";

export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance();
  if (instance) {
    Object.assign(instance.proxy as object, apis);
  }
}
