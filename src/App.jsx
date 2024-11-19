function Header({text, name}) {
  return (
    <header>
      <h1>{name}</h1>
      <div>{text}</div>
    </header>
  );
}



export default function App() {
  return (
    <div id="app">
      <Header name={"minjun"} text={"good"}/>
      <>
        <div>핑계노</div>
      </>
    </div>
  );
}
