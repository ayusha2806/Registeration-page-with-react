import React, { useState } from "react";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (task) => {
    setMainTask([...mainTask, task]);
  };

  return (
    <>
      <h2>Registeration Form</h2>
      <TaskForm onSubmit={submitHandler} />
      <br />
      <hr />
      <TaskList tasks={mainTask} />
    </>
  );
}

export default App;
