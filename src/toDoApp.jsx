import { useState } from "../libs/Meact/useState";

function ToDoApp() {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = () => {
    setToDos([...toDos, input]);
    setInput("");
  };

  return (
    <div>
      <h2>할 일 목록</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onclick={addToDo}>추가</button>
      <ul>
        {toDos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
