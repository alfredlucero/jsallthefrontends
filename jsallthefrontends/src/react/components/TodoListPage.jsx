import React from "react";
import Layout from "./Layout";
import CodePreview from "./CodePreview";
import TodoList, { TodoListCode } from "./TodoList";

const TodoListPreview = () => {
  const initialTodos = [
    {
      title: "Review homework",
      done: false,
    },
    {
      title: "Take out the trash",
      done: false,
    },
    {
      title: "Cook dinner",
      done: false,
    },
  ];

  return (
    <>
      <TodoList initialTodos={initialTodos} />
    </>
  );
};

const TodoListPage = () => {
  return (
    <Layout>
      <h2 className="mb-4">Todo List</h2>
      <p className="mb-6">
        We often deal with more than one thing at a time in life. Learning how
        to manage a list of anything is important.
      </p>
      <CodePreview preview={<TodoListPreview />} code={<TodoListCode />} />
    </Layout>
  );
};

export default TodoListPage;
