import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (this.state.title.length > 0 && this.state.dueDate.length > 0) {
      const newTask = {
        title: this.state.title,
        description: this.state.description,
        dueDate: this.state.dueDate,
      };
      this.props.addTask(newTask);
      this.setState({ title: "", description: "", dueDate: "" });
    }
  };

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  // inputRef = React.createRef<HTMLInputElement>();

  render() {
    return (
      <form onSubmit={this.addTask}>
        <div>
          <div
            style={{
              display: "flex",
              gap: "4px",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <b>Title:</b>
            <input
              required
              type="text"
              value={this.state.title}
              onChange={this.titleChanged}
            />
            <b>Description:</b>
            <input
              type="text"
              value={this.state.description}
              onChange={this.descriptionChanged}
            />
            <b>Due Date:</b>
            <input
              required
              type="date"
              value={this.state.dueDate}
              onChange={this.dueDateChanged}
            />
          </div>
        </div>
        <button type="submit" style={{ marginTop: "20px" }}>
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
