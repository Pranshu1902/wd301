import * as React from 'react';
import TaskCard from "./TaskCard";

function App() {
  const tomorrow = new Date();
  const yesterday = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  yesterday.setDate(new Date().getDate() - 1);

  const tasks = [
    {
      title: "Todo 1",
      dueDate: tomorrow.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      completedDate: "",
      assigneeName: "Pranshu Aggarwal",
    },
    {
      title: "Add a blog",
      dueDate: tomorrow.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      completedDate: "",
      assigneeName: "Pranshu Aggarwal",
    },
    {
      title: "Design the mockup",
      dueDate: "",
      completedDate: yesterday.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),

      assigneeName: "Pranshu Aggarwal",
    },
    {
      title: "Get the approval from principal",
      dueDate: "",
      completedDate: yesterday.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      assigneeName: "Pranshu Aggarwal",
    },
  ];

  return (
    <div className="App p-4">
      <p className="text-3xl font-bold">Smarter Tasks</p>
      <p>
        <b>Project</b>: Graduation Final Year Project (Revamp College Website)
      </p>
      <div className="pt-6 flex flex-col md:flex-row gap-6 justify-center w-full">
        <div className="rounded-lg p-2 border-4 w-1/3">
          <p className="flex justify-center text-xl font-medium pb-2">
            Pending
          </p>
          {tasks
            .filter((task) => task.dueDate.length > 0)
            .map((task) => (
              <TaskCard
                title={task.title}
                dueDate={task.dueDate}
                completedDate={task.completedDate}
                assigneeName={task.assigneeName}
              />
            ))}
          <div className="p-2 rounded-lg bg-gray-300 mt-6">+ New Task</div>
        </div>
        <div className="rounded-lg p-2 border-4 w-1/3">
          <p className="flex justify-center text-xl font-medium pb-2">Done</p>
          {tasks
            .filter((task) => task.completedDate.length > 0)
            .map((task) => (
              <TaskCard
                title={task.title}
                dueDate={task.dueDate}
                completedDate={task.completedDate}
                assigneeName={task.assigneeName}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
