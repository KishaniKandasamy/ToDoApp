import { useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take rubbish out', 'Complete the online courses']);
  const [input, setInput] = useState('');
  console.log(input);

  const addTodo = (event) => {
    event.preventDefault(); //will stop the refreshing
    console.log("Im working!");
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button type="submit" onClick={addTodo} >Add ToDo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
      </form>
    </div>
  );
}

export default App;
