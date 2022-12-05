import { LitElement, html } from 'lit';
import { state, property, customElement } from "lit/decorators.js";

interface Todo {
  id: string;
  todo: string;
  done: boolean;
}


export class TodoApp extends LitElement {
  @state()
  todos: Todo[] = []
  @state()
  todoToAdd = ""

  render() {
    return html`
      <div>
        <h1>Todo App</h1>
        <form @submit=${this._addTodo}>
          <label for="addTodoInput">Todo</label>
          <input type="text" id="addTodoInput" .value=${this.todoToAdd} @input=${this._updateTodoToAdd} placeholder="What do I need to do?" />
          <button type="submit">Add Todo</button>
        </form>

        <div>
          <h2>Todos</h2>
          <ul>
            ${this.todos.map((todo) => html`
              <li>
                ${todo.todo} <input type="checkbox" .checked=${todo.done} @change=${() => this._toggleDone(todo.id)} />
              </li>
            `)}
          </ul>
        </div>
      </div>
    `;
  }
  
  _updateTodoToAdd(e: Event) {
    this.todoToAdd = (e.target as HTMLInputElement).value;
  }

  _addTodo(e: Event) {
    e.preventDefault();
    this.todos = [...this.todos, { id: new Date().toString(), todo: this.todoToAdd, done: false }];
    this.todoToAdd = "";
  }

  _toggleDone(id: string) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true,
        };
      }
      return todo;
    });
  }
}

customElements.define('todo-app', TodoApp);