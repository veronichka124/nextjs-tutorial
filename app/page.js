import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="text-2xl btn btn-secondary">
        Get started
      </Link>
    </div>
  );
};

export default HomePage;
