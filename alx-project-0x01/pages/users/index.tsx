import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserCard from "@/components/common/UserCard"; // Import the UserCard

interface UsersProps {
  initialUsers: UserData[];
}

const Users: React.FC<UsersProps> = ({ initialUsers }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>(initialUsers);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
  };

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add User
        </button>
        <div className="mt-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} /> // Use UserCard here
          ))}
        </div>
        {isModalOpen && (
          <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
        )}
      </div>
      <Footer />
    </>
  );
};

// Fetch user data from external API
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      initialUsers: data,
    },
  };
}

export default Users;
