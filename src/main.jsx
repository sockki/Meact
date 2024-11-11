function Box({ id, children }) {
  return <div id={id}>{children}</div>
}
const reactElement = <Box id="box1">Box</Box>
ReactDOM.render(reactElement, document.getElementById("app"))
