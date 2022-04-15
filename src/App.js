import Spotlights from './Spotlights';

function App() {
  return (
    <div className="app">
      <Spotlights color="hsla(60, 100%, 75%, 0.5)" onTop={false}/>
      <h1>React-Stage-Lights</h1>
      <p>Demo - Version 0.1.0</p>
    </div>
  );
}

export default App;
