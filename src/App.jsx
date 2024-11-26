import { useState } from "../libs/Meact/useState";




export default function App() {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(3);
  const [num3, setNum3] = useState(4);

  return (
    <div id="app">
      <div id="state">{num}</div>
      <div id="state2">{num2}</div>
      <div id="state3">{num3}</div>
      <button onClick={() => setNum(num + 1)}>눌러</button>
      <button onClick={() => setNum2(num2 + 1)}>이것 봐라</button>
      <button onClick={() => setNum3(num3 + 1)}>신기하지</button>
    </div>
  );
}
