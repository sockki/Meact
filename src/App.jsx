function Header() {
  return (
    <header>
      <h1>My React Clone</h1>
    </header>
  );
}

function Content() {
  return (
    <main>
      <p>This is a sample content.</p>
    </main>
  );
}


export default function App() {
  return (
    <div id="app">
      <Header />
      <div>
        {[1,2,3,4,5].map(v => <Content />)}
      </div>
    </div>
  );
}
