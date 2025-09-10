import { useEffect, useState } from 'react';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul className="mt-4 space-y-2">
      {users.map(user => (
        <li key={user._id} className="border p-2 rounded">
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
}
