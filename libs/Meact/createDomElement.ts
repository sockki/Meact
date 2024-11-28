import { Element } from "../../type/meact";

export const Fragment = "fragment";

export const createDomElement = (meactNode: Element):HTMLElement => {
  const dom = document.createElement(
    meactNode.type === Fragment ? "div" : meactNode.type
  );

  Object.keys(meactNode.props).forEach((key) => {
    if (key !== "children" && meactNode.props[key]) {
      if (typeof meactNode.props[key] === "function") {
        const eventType = key.toLocaleLowerCase().slice(2);
        dom.addEventListener(eventType, meactNode.props[key] as EventListener);
      } else {
        dom.setAttribute(key, meactNode.props[key].toString());
      }
    }
  });

  switch (typeof meactNode.props.children) {
    case "string":
    case "number":
      dom.textContent = meactNode.props.children.toString();
      break;

    case "object":
      if (Array.isArray(meactNode.props.children)) {
        meactNode.props.children.forEach((child: Element) =>
          dom.appendChild(createDomElement(child))
        );
      } else {
        dom.appendChild(createDomElement(meactNode.props.children as Element)) 
      }
      break;
  }
  return dom;
};
