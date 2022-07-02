import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import AllTaskRow from "./AllTaskRow";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

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

  const [deleteTask, setDeleteTask] = useState(null);

  // const { data, isLoading, refetch } = useQuery("users", () =>
  //   fetch(`http://localhost:5005/tasks`, {
  //     method: "GET",
  //   }).then((res) => {
  //     return res.json();
  //   })
  // );
  //if (isLoading) return <Loading></Loading>;
  //refetch();

  const handleChangeTask = (event) => {
    console.log(event);
    console.log(event.target.value);
    console.log(event);

    // const {editabletask} = tasks.filter((task) => task._id === event._id);

    // console.log("editable ", editabletask);

    let items = [...tasks];
    console.log(items);

    let item = {
      ...items.filter((task) => task.task === event.target.defaultValue),
    };

    console.log(item);

    item[0].task = event.target.value;
    console.log(item);
    items[0] = item[0];
    console.log(items);
    setTasks(items);
  };

  console.log(tasks);

  const handleCheckBox = (event) => {
    console.log("checkbox event", event.target.value);
    setDeleteTask(event.target.value);
    const _id = event.target.value;

    const url = `http://localhost:5005/task?_id=${_id}&status=${1}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Task finised");
        //refetch();
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  w-full shadow-2xl bg-base-100 p-5">
            <h1>Your have {tasks?.length} remaining</h1>

            <div className="overflow-x-auto">
              <table className="table relative w-full">
                <tbody>
                  {tasks?.map((task) => (
                    <AllTaskRow
                      key={task?._id}
                      taskProps={task}
                      //refetch={refetch}
                      setDeleteTask={setDeleteTask}
                      handleCheckBox={handleCheckBox}
                      handleChangeTask={handleChangeTask}
                    ></AllTaskRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
