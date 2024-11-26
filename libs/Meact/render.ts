import { DomNode, Element } from "../../type/meact";

export const Fragment = "fragment";

export const render = (meactNode: Element, domNode: DomNode) => {
    
    const dom = document.createElement(
      meactNode.type === Fragment ? "div" : meactNode.type
    );
  
    Object.keys(meactNode.props).forEach((key) => {
      if (key !== "children" && meactNode.props[key]) {
        if(typeof meactNode.props[key] === "function"){
            dom.addEventListener("click",meactNode.props[key] as EventListener)
        }
        else {
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
            render(child, dom)
          );
        } else {
          render(meactNode.props.children as Element, dom);
        }
        break;
    }
    domNode.appendChild(dom);
  };