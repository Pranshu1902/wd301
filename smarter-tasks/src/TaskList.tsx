import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (t: TaskItem) => void;
}

interface State {}

class TaskList extends React.Component<Props, State> {
  render() {
    return this.props.tasks.map((task, idx) => (
      <ul>
        <Task key={idx} task={task} remove={this.props.removeTask} />
      </ul>
    ));
  }
}

export default TaskList;
