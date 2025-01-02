import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <div  key={user.id} className="flex justify-between items-center p-4 rounded shadow">
            <div className="flex flex-col gap-1">
              <p className="text-[12px]">Name:</p>
              <li key={user.id}>
                <span>{user.name}</span>
              </li>
            </div>
            <Link
              to={`/user/${user.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
