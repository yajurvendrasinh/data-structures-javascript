import React from "react";

export default function TodoList({ todos, deleteTask }) {
  console.log("in todolist", todos);
  return (
    <>
      {todos.map((task, idx) => {
        return (
          <li key={idx}>
            <label>
              <input type="checkbox" checked={task.completed} />
              {task.title}
            </label>
            <button id={task.id} onClick={deleteTask}>
              Delete task
            </button>
          </li>
        );
      })}
    </>
  );
}
