"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const content = formData.get("content");
  // some validation here

  const Task = z.object({
    content: z.string().min(5).max(25),
  });

  try {
    Task.parse({ content });
    await prisma.task.create({
      data: {
        content,
      },
    });
    // revalidate path
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (err) {
    // can't return error
    err.errors.map((err) => console.error(err.message));
    return { message: "error" };
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tasks");
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: !!completed,
    },
  });
  redirect("/tasks");
};
