import { ElementKey, JsxConfig } from "../../type/meact";

const makeElement = (
  type: string | Function,
  config: JsxConfig,
  elementKey?: ElementKey
) => {
  if (typeof type === "function") {
    return type(config);
  }

  let key: string | null = null;
  const props: JsxConfig = {
    children: ""
  };

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
  config: JsxConfig,
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
