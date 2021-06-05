import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';

function Todo(props) {
  return (
    <List className= "todo_list">
        <ListItemAvatar>
          
        </ListItemAvatar>
        <ListItem>
          <ListItemText primary={props.text}  secondary="dummy deadline⏰" />
        </ListItem>
      { /*<li>{props.text}</li> */}
    </List>
  )
}

export default Todo
