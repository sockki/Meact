type DomNode = HTMLElement

type JsxsConfig = {
  [key: string]: Element[];
};

type JsxConfig = {
  [key: string]: string | number | Element;
};

type ElementKey = string | number;

type Element = {
  type: string;
  key: string | null;
  props: JsxsConfig | JsxConfig;
};

export const Fragment = "fragment";

const makeElement = (
  type: string | Function,
  config: JsxsConfig | JsxConfig,
  elementKey?: ElementKey
) => {
  if (typeof type === "function") {
    return type(config);
  }

  let key: string | null = null;
  const props: JsxsConfig | JsxConfig = {};

  if (elementKey) {
    key = "" + elementKey;
  }

  if (config !== null) {
    for (let propName of Object.keys(config)) {
      props[propName] = config[propName];
    }
  }

  const element = {
    type,
    key,
    props,
  };

  return element;
};

export const jsxs = (
  type: string,
  config: JsxsConfig,
  elementKey?: ElementKey
): Element => {
  return makeElement(type, config, elementKey);
};

export const jsx = (
  type: string,
  config: JsxConfig,
  elementKey?: ElementKey
): Element => {
  return makeElement(type, config, elementKey);
};

export const render = (meactNode: Element, domNode: DomNode) => {
  const dom = document.createElement(meactNode.type === Fragment ? "div" : meactNode.type);

  Object.keys(meactNode.props).forEach((key) => {
    if (key !== "children" && meactNode.props[key]) {
      dom.setAttribute(key, meactNode.props[key].toString());
    }
  });

  switch (typeof meactNode.props.children) {
    case "string":
    case "number":
      dom.textContent = meactNode.props.children.toString()
      break;

    case "object":
      if(Array.isArray(meactNode.props.children)){
        meactNode.props.children.forEach((child:Element) => render(child, dom))
      }
      else {
        render(meactNode.props.children as Element, dom)
      }
      break
  }
  domNode.appendChild(dom);
};
