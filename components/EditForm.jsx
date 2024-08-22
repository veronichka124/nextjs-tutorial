import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form action={editTask}>
      <div className="w-full border border-solid-300 px-10 py-16 rounded-lg">
        <input type="hidden" name="id" value={id} />
        <input
          type="text"
          className="input input-bordered w-full mb-4"
          placeholder="type here"
          name="content"
          required
          defaultValue={content}
        />
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Completed</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary mb-4"
              name="completed"
              defaultChecked={completed}
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary join-item uppercase mt-4"
        >
          Edit Task
        </button>
      </div>
    </form>
  );
};

export default EditForm;
