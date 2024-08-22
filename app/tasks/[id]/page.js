import EditForm from "@/components/EditForm";
import Link from "next/link";
import { getTask } from "@/utils/actions";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <div className="max-w-lg">
      <Link href="/tasks" className="btn btn-primary mb-12">
        Back to tasks
      </Link>
      <h1>Edit Task: {params.id}</h1>
      <EditForm task={task} />
    </div>
  );
};

export default SingleTaskPage;
