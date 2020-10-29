import React, { useState } from "react";
import Code from "./Code";

// initialTodos prop looks like [{ title: "Some todo", done: false}, ...]
const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState("");

  const onChangeTodoInput = (e) => {
    const newTodoInput = e.currentTarget.value;
    setTodoInput(newTodoInput);
  };

  const onClickAddTodo = () => {
    const newTodo = {
      title: todoInput,
      done: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoInput("");
  };

  const onClickToggleDoneTodo = (todoId) => {
    const newTodos = todos.map((todo, currentTodoId) => {
      if (currentTodoId === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });
    setTodos(newTodos);
  };

  const onClickDeleteTodo = (todoId) => {
    const newTodos = todos.filter(
      (todo, currentTodoId) => currentTodoId !== todoId
    );
    setTodos(newTodos);
  };

  return (
    <div className="w-full">
      <div className="flex justify-start items-end mb-4">
        <div className="w-3/4 mr-3">
          <label className="block text-gray-700 font-bold mb-2" for="todoInput">
            Todo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todoInput"
            type="text"
            placeholder="What do you have to do today?"
            onChange={onChangeTodoInput}
            value={todoInput}
          />
        </div>
        <button
          type="button"
          className="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-3 rounded"
          onClick={onClickAddTodo}
        >
          Add
        </button>
      </div>

      <div>
        {todos.map((todo, todoId) => (
          <div
            className="flex justify-between items-center p-4 rounded bg-gray-100 shadow-md my-2"
            key={todoId}
          >
            <p
              className={`w-3/4 break-words ${todo.done ? "line-through" : ""}`}
            >
              {todo.title}
            </p>
            <div className="w-1/4 flex justify-end ml-2">
              <button
                type="button"
                className="text-sm bg-green-200 text-green-600 hover:text-green-800 py-2 px-3 rounded mr-2 flex justify-center items-center"
                onClick={() => {
                  onClickToggleDoneTodo(todoId);
                }}
              >
                <i className="fas fa-check-square"></i>
              </button>
              <button
                type="button"
                className="text-sm bg-red-200 text-red-600 hover:text-red-800 py-2 px-3 rounded flex justify-center items-center"
                onClick={() => {
                  onClickDeleteTodo(todoId);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const todoListCode = `// initialTodos prop looks like [{ title: "Some todo", done: false}, ...]
const TodoList = ({ initialTodos }) => {
  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState("");

  const onChangeTodoInput = (e) => {
    const newTodoInput = e.currentTarget.value;
    setTodoInput(newTodoInput);
  };

  const onClickAddTodo = () => {
    const newTodo = {
      title: todoInput,
      done: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodoInput("");
  };

  const onClickToggleDoneTodo = (todoId) => {
    const newTodos = todos.map((todo, currentTodoId) => {
      if (currentTodoId === todoId) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });
    setTodos(newTodos);
  };

  const onClickDeleteTodo = (todoId) => {
    const newTodos = todos.filter(
      (todo, currentTodoId) => currentTodoId !== todoId
    );
    setTodos(newTodos);
  };

  return (
    <div className="w-full">
      <div className="flex justify-start items-end mb-4">
        <div className="w-3/4 mr-3">
          <label className="block text-gray-700 font-bold mb-2" for="todoInput">
            Todo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todoInput"
            type="text"
            placeholder="What do you have to do today?"
            onChange={onChangeTodoInput}
            value={todoInput}
          />
        </div>
        <button
          type="button"
          className="bg-blue-200 text-blue-600 hover:text-blue-800 py-2 px-3 rounded"
          onClick={onClickAddTodo}
        >
          Add
        </button>
      </div>

      <div>
        {todos.map((todo, todoId) => (
          <div
            className="flex justify-between items-center p-4 rounded bg-gray-100 shadow-md my-2"
            key={todoId}
          >
            <p
              className={\`w-3/4 break-words $\{todo.done ? "line-through" : ""}\`}
            >
              {todo.title}
            </p>
            <div className="w-1/4 flex justify-end ml-2">
              <button
                type="button"
                className="text-sm bg-green-200 text-green-600 hover:text-green-800 py-2 px-3 rounded mr-2 flex justify-center items-center"
                onClick={() => {
                  onClickToggleDoneTodo(todoId);
                }}
              >
                <i className="fas fa-check-square"></i>
              </button>
              <button
                type="button"
                className="text-sm bg-red-200 text-red-600 hover:text-red-800 py-2 px-3 rounded flex justify-center items-center"
                onClick={() => {
                  onClickDeleteTodo(todoId);
                }}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`;

export const TodoListCode = () => {
  return <Code code={todoListCode} language="javascript" />;
};

export default TodoList;
