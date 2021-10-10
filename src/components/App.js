import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

class App extends React.Component {
  state = {
    tasks: [],
  };

  createTodo(todoContent) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { id: todoContent, content: todoContent, done: false },
      ],
    });
  }

  doTask(idParameter) {
    const taskIndex = this.state.tasks.findIndex(
      item => item.id === idParameter
    );
    const tasksCopy = [...this.state.tasks];
    tasksCopy[taskIndex] = {
      ...tasksCopy[taskIndex],
      done: !this.state.tasks[taskIndex].done,
    };
    this.setState({ tasks: tasksCopy });
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='card frame'>
          <Header>Hay {this.state.tasks.length} tasks</Header>
          <TodoList
            tasks={this.state.tasks}
            doTask={id => this.doTask(id)}
          ></TodoList>
          <Form onSubmit={value => this.createTodo(value)} />
        </div>
      </div>
    );
  }
}

export default App;
