export type DomNode = HTMLElement;

export type JsxsConfig = {
  [key: string]: Element[];
};

export type JsxConfig = {
  [key: string]: string | number | Element;
};

export type ElementKey = string | number;

export type Element = {
  type: string;
  key: string | null;
  props: JsxsConfig | JsxConfig;
};