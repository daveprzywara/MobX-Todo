import { observable, action, computed } from "mobx";

class TodoStore {
  @observable todos = [];

  @action addTodo = todo => {
    this.todos.push(todo);
  };

  @computed get total() {
    return this.todos.length;
  }
}

const store = new TodoStore();
export default store;
