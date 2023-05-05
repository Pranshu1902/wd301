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
      <div className="TaskItem">
        <h1>{this.props.task.title}</h1>
        <h3>{this.props.task.description}</h3>
        {this.props.task.dueDate}
        <div onClick={() => this.props.remove(this.props.task)}>delete</div>
      </div>
    );
  }
}

export default Task;
