import { updateDomElement } from '../libs/Meact/updateDomElement.ts';
import App from './App.jsx';

const root = document.getElementById('root');
let oldVDom = undefined

export const rendering = () => {
    const newVDom = App()
    updateDomElement(root,oldVDom,newVDom)
    oldVDom = newVDom
};


rendering()


