export type DomNode = HTMLElement;

export type JsxConfig = {
  children: string | Element | Element[],
  [key: string]: string | number | Element | Element[] | EventListener | Function;
};

export type ElementKey = string | number;

export type Element = {
  type: string;
  key: string | null;
  props: JsxConfig;
};
