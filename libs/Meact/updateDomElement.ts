import { Element, JsxConfig } from "../../type/meact";
import { createDomElement } from "./createDomElement";

export const updateDomElement = (
  parent: HTMLElement,
  oldVDom: Element,
  newVDom: Element,
  index: number = 0
) => {
  console.log(parent, oldVDom, newVDom, index);
  // 1. oldVDom 만 있는 경우: 해당 DOM 삭제
  if (!newVDom && oldVDom) {
    console.log("stop in 1")
    parent.removeChild(parent.children[index]);
    return
  }
  // 2. newVDom 만 있는 경우: newDOM 추가
  if (newVDom && !oldVDom) {
    console.log("stop in 2")
    parent.appendChild(createDomElement(newVDom));
    return 
  }
  // 3. oldVDom과 newVDom의 태그 이름(type)이 다를 경우
  if (newVDom.type !== oldVDom.type){
    console.log("stop in 3")
    parent.replaceChild(
      createDomElement(newVDom),
      parent.children[index]
    );
    return 
  }
    
  // 4. oldVDom과 newVDom의 태그 이름(type)이 같을 경우
  updateAttributes(
    parent.children[index] as HTMLElement,
    newVDom.props,
    oldVDom.props
  );
  // 5. 태그 이름이 같은데, 내부 요소가 text 인 경우
  if (
    typeof newVDom.props.children === "string" ||
    typeof newVDom.props.children === "number"
  ) {
    console.log("stop in 5")
    parent.children[index].textContent = newVDom.props.children;
    return 
  }

  // 모든 자식 태그를 순회하며 1~5의 내용을 반복한다.
  const oldChildLength = Array.isArray(oldVDom.props.children)
    ? oldVDom.props.children.length
    : 1;
  const newChildLength = Array.isArray(newVDom.props.children)
    ? newVDom.props.children.length
    : 1;
  const maxLength = Math.max(oldChildLength, newChildLength);
  console.log("go next")
  for (let i = 0; i < maxLength; i++) {
    updateDomElement(
      parent.children[index] as HTMLElement,
      vDomChildrenByIndex(oldVDom.props.children, i) as Element,
      vDomChildrenByIndex(newVDom.props.children, i) as Element,
      i
    );
  }
};

const updateAttributes = (
  targetDom: HTMLElement,
  newProps: JsxConfig,
  oldProps: JsxConfig
) => {
  // 추가되거나 변경된 Props 반영
  for (const key of Object.keys(newProps)) {
    if (key !== "children") {
      if (oldProps[key] === newProps[key]) continue;
      if (typeof newProps[key] === "function") {
        const eventType = key.toLocaleLowerCase().slice(2);
        targetDom.addEventListener(eventType, newProps[key] as EventListener)
        continue
      }
      targetDom.setAttribute(key, newProps[key].toString());
    }
  }

  // 사라진 props 제거
  for (const key of Object.keys(oldProps)) {
    if (key !== "children") {
      if (newProps[key] !== undefined) continue;
      if (typeof oldProps[key] === "function") {
        const eventType = key.toLocaleLowerCase().slice(2);
        targetDom.removeEventListener(eventType, oldProps[key] as EventListener)
      }
      targetDom.removeAttribute(key);
    }
  }
};

const vDomChildrenByIndex = (
  children: Element[] | Element | string,
  index: number
) => (Array.isArray(children) ? children[index] : children);
