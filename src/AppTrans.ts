import { jsx as _jsx } from "./Meact/jsx-runtime";
function App() {
  return _jsx("div", {
    id: "app",
    children: _jsx("h1", {
      children: "Hello, React Clone!"
    })
  });
}
export default App;

console.log(JSON.stringify(App()))

/* {
  "type":"div",
  "key":null,
  "props":{
    "id":"app",
    "children":{
      "type":"h1",
      "key":null,
      "props":{
        "children":"Hello, React Clone!"
      }
    }
  }
} */