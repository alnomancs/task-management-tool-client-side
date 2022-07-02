import React from "react";

const AllTaskRowCompleted = ({ taskProps }) => {
  const { _id, task, status } = taskProps;
  return (
    <tr key={_id}>
      <td>
        <input type="text" className="" value={task} />
      </td>
    </tr>
  );
};

export default AllTaskRowCompleted;
