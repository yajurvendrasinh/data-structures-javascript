/**
 * FEATURES
 * Todo needs to have input for TASK
 * pressing enter/add button adds new task to the list
 * each task can have 3 states - completed , non-complete, deleted
 *
 * COMPONENTS
 * Input box for adding task title/task
 * TASKLIST : with checkbox to suggest completed/ non-completed task
 *            delete button to delete a task
 */

import React, { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault(); // to stop the from from refreshing the page
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        { id: crypto.randomUUID(), title: task, completed: false },
      ];
    });
    setTask("");
  }
  function deleteTask(e) {
    let newList = todos.filter((task) => {
      return task.id !== e.target.id;
    });
    setTodos(newList);
  }

  return (
    <div>
      <h3> ToDo </h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Add Task</label>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          <TodoList todos={todos} deleteTask={deleteTask} />
        </ul>
      </div>
    </div>
  );
}
