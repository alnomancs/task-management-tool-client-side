import React, { useState } from "react";
import { toast } from "react-toastify";

const Todo = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
    const taskDetail = {
      task: task,
      status: "0",
    };

    fetch(`http://localhost:5005/addTask`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success(`${task} added to your task list`);
          setTask("");
        } else {
          toast.error("Something error");
        }
      });
  };
  return (
    <div className="flex justify-center">
      <div className="mt-10 card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">New Task</h2>

          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Add task"
              value={task}
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => setTask(event.target.value)}
            />
            <button className="btn btn-circle text-4xl mt-5" type="submit">
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todo;
