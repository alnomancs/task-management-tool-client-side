import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllTaskRowCompleted from "./AllTaskRowCompleted";

const Completed = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`https://red-toonie-08010.herokuapp.com/tasksComplete`, {
      method: "GET",
    }).then((res) => {
      return res.json();
    })
  );
  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  w-full shadow-2xl bg-base-100 p-5">
            <h1>Your have {tasks.length} Completed task</h1>

            <div className="overflow-x-auto">
              <table className="table relative w-full">
                <tbody>
                  {tasks?.map((task) => (
                    <AllTaskRowCompleted
                      key={task?._id}
                      taskProps={task}
                    ></AllTaskRowCompleted>
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

export default Completed;
