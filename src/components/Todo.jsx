import { useState } from "react";
import "./todo.css";
import shortid from "shortid";
const Todo = ({ addTask }) => {
  const [task, setTask] = useState("");
  const handleAddition = () => {
    addTask({ id: shortid.generate(), task: task, complete: false });
    setTask("");
  };
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddition}>Add Task</button>
      </form>
    </>
  );
};

export default Todo;
