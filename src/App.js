import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("TodoStore")
@observer
class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const todo = this.todo.value;
    this.props.TodoStore.addTodo(todo);
    this.todo.value = "";
  };

  render() {
    const { TodoStore } = this.props;
    return (
      <div className="App">
        <h2>You have {TodoStore.total} todos.</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter Todo"
            ref={input => (this.todo = input)}
          />
          <button>Add Todo</button>
        </form>

        <ul>
          {TodoStore.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
