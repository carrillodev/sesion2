import React from 'react';
import Todo from './Todo';
import '../css/todolist.css';

const TodoList = props => {
  return (
    <div className='list-wrapper'>
      {props.tasks.map(task => (
        <Todo task={task} key={task.id} doTask={props.doTask} />
      ))}
    </div>
  );
};

export default TodoList;
