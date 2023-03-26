import * as React from 'react';
import "./TaskCard.css";

const TaskCard = (props: any) => {
  console.log(props);
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.completedDate.length && <p>Completed on: {props.completedDate}</p>}
      {props.dueDate.length && <p>Due on: {props.dueDate}</p>}
      <p>Assignee: name...</p>
    </div>
  );
};

export default TaskCard;
