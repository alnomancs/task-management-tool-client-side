import React from "react";

const Todo = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-10 card w-96  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">New Task</h2>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
