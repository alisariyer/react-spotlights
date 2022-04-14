import './app.css';
import Spotlights from './Spotlights';

function App() {
  return (
    <div className="app">
      <Spotlights color="hsla(60, 100%, 75%, 0.5)" onTop={false}/>
      <h1>REACT SPOTLIGHTS</h1>
      <p>Version 1.0 released...</p>
    </div>
  );
}

export default App;
