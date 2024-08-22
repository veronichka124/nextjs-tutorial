import { deleteTask } from "@/utils/actions";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-sm btn-error">Delete</button>
    </form>
  );
};

export default DeleteForm;
