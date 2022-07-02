import React, { useEffect, useState } from "react";
import AllTaskRow from "./AllTaskRow";
import { toast } from "react-toastify";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5005/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  // const { data, isLoading, refetch } = useQuery("users", () =>
  //   fetch(`http://localhost:5005/tasks`, {
  //     method: "GET",
  //   }).then((res) => {
  //     return res.json();
  //   })
  // );
  //if (isLoading) return <Loading></Loading>;
  //refetch();

  const handleEditTask = (event) => {};

  const handleChangeTask = (event) => {
    let items = [...tasks];

    let item = {
      ...items.filter((task) => task.task === event.target.defaultValue),
    };
    item[0].task = event.target.value;
    console.log(item);
    console.log(items);
    items = item[0];
    setTasks(items);
  };

  const handleCheckBox = (event) => {
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
        toast("Task finised");
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
                      handleCheckBox={handleCheckBox}
                      handleChangeTask={handleChangeTask}
                      handleEditTask={handleEditTask}
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
