import { useState } from "../libs/Meact/useState";
import ToDoApp from "./TodoApp";


function App() {
  const [num1,setNum1] = useState(1)
  const [num2,setNum2] = useState(1)
  return (
    <div id="app">
      <h1>My React Clone</h1>
      <ToDoApp/>
    </div>
  );
}

export default App;
