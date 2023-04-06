import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  description: string;
  dueDate: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem">
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        {this.props.dueDate}
      </div>
    );
  }
}

export default Task;
