import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p>Explore all the users here.</p>
      </main>
    </div>
  );
}

export default Users;
