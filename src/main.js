import { render } from '../libs/Meact/jsx-runtime.ts';
import App from './App.jsx';

const appElement = App();
const root = document.getElementById('root');

root && render(appElement, root)

console.log(JSON.stringify(appElement, null, 2));
