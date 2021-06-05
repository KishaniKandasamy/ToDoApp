import { useState, useEffect} from 'react';
import {Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
   // console.log(input);

   // when the app loads, we need to listen to database and then we get some data using fetch, 
  useEffect(() => {
    //this code fires when app.js loaded
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
       //console.log(snapshot.docs.map(doc => doc.data().todo));
         setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

    

  const addTodo = (event) => {
    event.preventDefault(); //will stop the refreshing when everytime form submitted
    //console.log("Im working!");

    db.collection('todos').add({
      todo : input, // It will create a differenr id for each todo object
      timestamp : firebase.firestore.FieldValue.serverTimestamp() //set the firebase timestamp(consistence) as every country has differnt time zone
    })
    //setTodos([...todos, input]);
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
