import * as React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  completedDate?: string;
  dueDate?: string;
  assigneeName: string;
}

const TaskCard = (props: TaskCardProps) => {
  console.log(props);
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.completedDate.length && <p>Completed on: {props.completedDate}</p>}
      {props.dueDate.length && <p>Due on: {props.dueDate}</p>}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
