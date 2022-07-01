import React from "react";

const Task = ({ t }) => {
  const { task } = t;

  return (
    <form>
      <div className="flex justify-center gap-5">
        <input type="checkbox" className="checkbox mt-3" />
        <input
          type="text"
          value={task}
          placeholder="email"
          className="input w-full max-w-xs"
        />{" "}
        <button className="btn">Update</button>
      </div>
    </form>
  );
};

export default Task;
