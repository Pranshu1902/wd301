import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskProp {
  remove: (t: TaskItem) => void;
  task: TaskItem;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <li className="TaskItem">
        <h1>{this.props.task.title}</h1>
        <h3>{this.props.task.description}</h3>
        {this.props.task.dueDate}
        <div className="deleteTaskButton" onClick={() => this.props.remove(this.props.task)}>X</div>
      </li>
    );
  }
}

export default Task;
