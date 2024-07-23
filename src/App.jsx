import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Task from "./components/Task";

function App() {
  let [tasks, setTasks] = useState([]);
  const [taskStatus, setTastStatus] = useState("all");
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const completed = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete };
        } else {
          return task;
        }
      })
    );
  };
  const removeCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.complete));
  };
  const completeAllTasks = () => {
    setTasks(
      tasks.map((task) => {
        return { ...task, complete: true };
      })
    );
  };

  if (taskStatus === "completed") {
    tasks = tasks.filter((task) => task.complete);
  } else if (taskStatus === "active") {
    tasks = tasks.filter((task) => !task.complete);
  }

  return (
    <div className="app">
      <Todo addTask={addTask} />
      <div className="status-btns">
        <button onClick={() => setTastStatus("all")}>All</button>
        <button onClick={() => setTastStatus("active")}>Active</button>
        <button onClick={() => setTastStatus("completed")}>Completed</button>
      </div>
      <div className="status-btns" style={{ marginTop: "-20px" }}>
        <button onClick={removeCompletedTasks}>
          Remove All Completed Tasks
        </button>
        <button onClick={completeAllTasks}>Complete All Tasks</button>
      </div>
      <div className="tasks-container">
        {tasks.length === 0
          ? "No Tasks"
          : tasks.map((task) => {
              return (
                <Task
                  info={task}
                  deleted={() => deleteTask(task.id)}
                  completed={() => completed(task.id)}
                  key={task.id}
                />
              );
            })}
      </div>
    </div>
  );
}

export default App;
