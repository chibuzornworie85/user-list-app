import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function UserDetailsPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, [id]);

  if (!user) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Details</h1>
      <div className="bg-gray-100 p-4 rounded shadow space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
        <p><strong>Address:</strong></p>
        <ul className="pl-4 list-disc">
          <li><strong>Street:</strong> {user.address.street}</li>
          <li><strong>Suite:</strong> {user.address.suite}</li>
          <li><strong>City:</strong> {user.address.city}</li>
          <li><strong>Zipcode:</strong> {user.address.zipcode}</li>
          <li>
            <strong>Geo:</strong> Latitude {user.address.geo.lat}, Longitude {user.address.geo.lng}
          </li>
        </ul>
        <p><strong>Company:</strong></p>
        <ul className="pl-4 list-disc">
          <li><strong>Name:</strong> {user.company.name}</li>
          <li><strong>Catch Phrase:</strong> {user.company.catchPhrase}</li>
          <li><strong>BS:</strong> {user.company.bs}</li>
        </ul>
      </div>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Back to User List
      </Link>
    </div>
  );
}

export default UserDetailsPage;
