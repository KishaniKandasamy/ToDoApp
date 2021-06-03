import { useState} from 'react';
import {Button, FormControl, Input, InputLabel } from '@material-ui/core';

import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk', 'Take rubbish out', 'Complete the online courses']);
  const [input, setInput] = useState('');
   // console.log(input);

  const addTodo = (event) => {
    event.preventDefault(); //will stop the refreshing
    //console.log("Im working!");
    setTodos([...todos, input]);
    setInput(''); // This will clear the input space up 
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
      <FormControl>
      <InputLabel>✅ Write a todo</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>

      <Button  disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
       Add ToDo
      </Button> 
      {/*<button type="submit" onClick={addTodo} >Add ToDo</button>*/}

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
