import { useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take rubbish out']);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input />
      <button>Add ToDo</button>

      <ul>
        <li></li>
        <li></li>
      </ul>

    </div>
  );
}

export default App;
