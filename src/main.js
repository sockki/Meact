import { createDomElement } from '../libs/Meact/createDomElement.ts';
import App from './App.jsx';

const root = document.getElementById('root');

export const rendering = () => {
    root.innerHTML = "";
    const appElement = App()
    root.appendChild(createDomElement(appElement))
};



rendering()


