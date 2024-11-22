import { render } from '../libs/Meact/jsx-runtime.ts';
import App from './App.jsx';


const root = document.getElementById('root');

export const rendering = () => {
    if(root) {
        root.innerHTML = "";
        const appElement = App()
        render(appElement, root)
    }
};

rendering()

console.log(JSON.stringify(appElement, null, 2));
