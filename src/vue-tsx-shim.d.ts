import "vue";

type EventHandler = (...args: any[]) => void;

declare module "vue" {
  interface HTMLAttributes {
    id?: string;
    role?: string;
    tabindex?: number;
    onClick?: unknown;
    onTouchend?: unknown;
    onTouchmove?: unknown;
    onTouchstart?: unknown;
    onTouchcancel?: unknown;
    onTouchmovePassive?: unknown;
    onTouchstartPassive?: unknown;
  }

  interface HTMLAttributes {
    onTouchmovePassive?: EventHandler;
    onTouchstartPassive?: EventHandler;
  }
}
