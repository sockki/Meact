import { render } from '../libs/Meact/jsx-runtime.ts';
import App from './App.jsx';


const root = document.getElementById('root');

export const rendering = () => {
    root.innerHTML = "";
    const appElement = App()
    render(appElement, root)
};

rendering()


