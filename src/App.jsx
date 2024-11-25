function Header({text}) {
  return (
    <header>
      <div>{text}</div>
    </header>
  );
}



export default function App() {
  return (
    <div id="app">
      <span id="나만 달라서">ㄹㅇㄹㅇㄹㅇㄹ</span>
      <>
        {[1,2,3].map(v => <Header text={v}/>)}
      </>
    </div>
  );
}
