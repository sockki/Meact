type jsxsConfig = {
  [key: string]: element[];
};

type jsxConfig = {
  [key: string]: string | number | element;
};

type maybeKey = string | number;

type element = {
  type: string;
  key: string | null;
  props: jsxsConfig | jsxConfig;
};

export const Fragment = "fragment" 

const makeElement = (
  type: string | Function,
  config: jsxsConfig | jsxConfig,
  maybeKey?: maybeKey
) => {
  if(typeof type === "function") {
    return type(config);
  }
  
  let key:string | null = null;
  const props: jsxsConfig | jsxConfig = {};

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
  config: jsxsConfig,
  maybeKey?: maybeKey
): element => {
  return makeElement(type, config, maybeKey);
};

export const jsx = (
  type: string,
  config: jsxConfig,
  maybeKey?: maybeKey
): element => {
  return makeElement(type, config, maybeKey);
};
