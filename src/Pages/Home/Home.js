import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTasks(data);
      });
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  w-full shadow-2xl bg-base-100">
            <div className="card-body border-red-300">
              {tasks.map((task) => (
                <Task key={task._id} t={task}></Task>
              ))}

              {/* <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
