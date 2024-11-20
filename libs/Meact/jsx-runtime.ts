type DomNode = HTMLElement

type JsxsConfig = {
  [key: string]: Element[];
};

type JsxConfig = {
  [key: string]: string | number | Element;
};

type MaybeKey = string | number;

type Element = {
  type: string;
  key: string | null;
  props: JsxsConfig | JsxConfig;
};

export const Fragment = "fragment";

const makeElement = (
  type: string | Function,
  config: JsxsConfig | JsxConfig,
  maybeKey?: MaybeKey
) => {
  if (typeof type === "function") {
    return type(config);
  }

  let key: string | null = null;
  const props: JsxsConfig | JsxConfig = {};

  if (maybeKey) {
    key = "" + maybeKey;
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
  maybeKey?: MaybeKey
): Element => {
  return makeElement(type, config, maybeKey);
};

export const jsx = (
  type: string,
  config: JsxConfig,
  maybeKey?: MaybeKey
): Element => {
  return makeElement(type, config, maybeKey);
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
