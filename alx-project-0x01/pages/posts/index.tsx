import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p>Explore all the posts here.</p>
      </main>
    </div>
  );
}

export default Posts;
