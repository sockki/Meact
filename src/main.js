import { updateDomElement } from '../libs/Meact/updateDomElement.ts';
import App from './App.jsx';

const root = document.getElementById('root');
let oldVDom = undefined

let renderingNum = 0

export const rendering = () => {
  const newVDom = App()
  updateDomElement(root,oldVDom,newVDom)
  oldVDom = newVDom
  renderingNum += 1
  console.log(renderingNum)
};


rendering()


