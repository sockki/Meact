"use strict";

var _jsxRuntime = require("custom-jsx-library/jsx-runtime");
function Box(_ref) {
  let {
    id,
    children
  } = _ref;
  return (0, _jsxRuntime.jsx)("div", {
    id: id,
    children: children
  });
}
const reactElement = (0, _jsxRuntime.jsx)(Box, {
  id: "box1",
  children: "Box"
});
ReactDOM.render(reactElement, document.getElementById("app"));
