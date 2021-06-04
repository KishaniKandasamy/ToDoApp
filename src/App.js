import { useState, useEffect } from 'react';
import {Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';

function App() {
  const [todos, setTodos] = useState(['abc' , 'def']);
  const [input, setInput] = useState('');
   // console.log(input);

   //When app loads we need to listen to the database and fetch new todos as they gets added / removed
  useEffect(() => { 
  //This code here fires when the  app.js loads (function, dependencies)

  db.collection('todos').onSnapshot(snapshot => {
  console.log(snapshot.docs.map(doc => doc.data().todo));
   //console.log();
   //setTodos(snapshot.docs.map(doc => doc.data().todo)) // map array to atray of objects
   })
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); //will stop the refreshing
    //console.log("Im working!");
    setTodos([...todos, input]); //appending action
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
          <Todo text={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
      </form>
    </div>
  );
}

export default App;
