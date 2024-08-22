"use client";
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") toast.error("Error");
    if (state.message === "success") toast.success("Task was created");
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskFormCustom;

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item uppercase"
      disabled={pending}
    >
      {pending ? "Adding ..." : "Add Task"}
    </button>
  );
};
