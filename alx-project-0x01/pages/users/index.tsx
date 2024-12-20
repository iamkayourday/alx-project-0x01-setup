import React, { useState } from "react";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: UserData) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add User
      </button>
      <ul className="mt-4">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default Users;
