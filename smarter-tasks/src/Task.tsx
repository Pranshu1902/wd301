import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";
import { Link } from "react-router-dom";

interface TaskProp {
  remove: (t: TaskItem) => void;
  task: TaskItem;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <li className="TaskItem">
        <Link to={`/tasks/${this.props.task.id}`}>
          <h2 className="text-base">{this.props.task.title}</h2>
        </Link>
        <h3>{this.props.task.description}</h3>
        {this.props.task.dueDate}
        <div
          className="deleteTaskButton"
          onClick={() => this.props.remove(this.props.task)}
        >
          X
        </div>
      </li>
    );
  }
}

export default Task;
