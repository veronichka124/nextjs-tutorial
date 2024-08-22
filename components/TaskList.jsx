import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  if (tasks.length === 0) {
    return <h2>No tasks to show</h2>;
  }

  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center rounded-lg border border-base-300 py-4 px-6 mb-4 shadow-lg"
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? `line-through` : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link
                href={`/tasks/${task.id}`}
                className="btn btn-sm btn-secondary"
              >
                Edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
