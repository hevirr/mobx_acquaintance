import {makeAutoObservable} from "mobx";

class Todo {
  todos = [
    {id: -2, title: 'Сходи в магазин', completed: false},
    {id: -1, title: 'Выучи стихотворение', completed: false},
    {id: 0, title: 'Сделай уроки', completed: false}
  ];
  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  completeTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }

  fetchTodos() {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.todos = [...this.todos, ...json]
      })
  }
}

export default new Todo()