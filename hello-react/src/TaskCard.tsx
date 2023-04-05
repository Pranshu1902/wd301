import * as React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title?: string;
  completedAtDate?: string;
  dueDate?: string;
  assigneeName?: string;
}

const TaskCard = (props: TaskCardProps) => {
  console.log(props);
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{props?.title}</h2>
      {props.completedAtDate && <p>Completed on: {props?.completedAtDate}</p>}
      {props.dueDate && <p>Due on: {props?.dueDate}</p>}
      {props.assigneeName && <p>Assignee: {props?.assigneeName}</p>}
    </div>
  );
};

export default TaskCard;
