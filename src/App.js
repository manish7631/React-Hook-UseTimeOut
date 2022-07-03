import './App.css';
import { useTimeout } from './Hooks/useTimeout';

function App() {
 
 const ready = useTimeout()
  return (
    <div className="App">
      <h1>Ready</h1>
     {ready ? "Ready" : "Not Ready"}
    </div>
  );
}

export default App;
