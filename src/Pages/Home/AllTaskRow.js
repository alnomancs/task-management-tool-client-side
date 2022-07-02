import React, { useState } from "react";
import { toast } from "react-toastify";

const AllTaskRow = ({
  taskProps,

  setDeleteTask,
  handleCheckBox,
  handleChangeTask,
}) => {
  const { _id, task } = taskProps;
  // const [task, setTask] = useState([]);
  // setTask(taskProps);

  return (
    <tr key={_id}>
      <td>
        <input
          type="checkbox"
          value={_id}
          className="checkbox"
          onClick={handleCheckBox}
        />
      </td>
      <td>
        <input type="text" onChange={handleChangeTask} value={task} />
      </td>

      <td>
        <label className="btn btn-error btn-xs">Edit</label>
      </td>
    </tr>
  );
};

export default AllTaskRow;
