import prisma from "@/utils/db";

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "First Task",
  //   },
  // });
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>;
  }

  return (
    <div>
      <h1 className="text-7xl">PrismaExamplePage</h1>
      {tasks.map((task) => {
        return <p key={task.id}>{task.content}</p>;
      })}
    </div>
  );
};

export default PrismaExamplePage;
