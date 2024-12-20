import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="p-4 flex-grow flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-center">User Directory</h1>
            <p className="text-gray-600 text-center">No users available to display.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4 flex-grow">
        <h1 className="text-2xl font-semibold mb-6 text-center md:text-left">User Directory</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    console.error("Failed to fetch users:", response.statusText);
    return {
      props: {
        posts: [], // Fallback to an empty array
      },
    };
  }

  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
