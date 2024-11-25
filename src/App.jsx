import { useState } from "../libs/Meact/useState";

function Header({text}) {
  return (
    <header>
      <div>{text}</div>
    </header>
  );
}

let renderingCount = 1


export default function App() {
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(3);
  const onClick = () => {
    setNum(num + 1)
  }
  renderingCount += 1
  return (
    <div id="app">
      <div id="state">{num}</div>
      <div id="state2">{num2}</div>
      <div>{renderingCount}</div>
      <button onClick={() => onClick()}>눌러</button>
    </div>
  );
}
