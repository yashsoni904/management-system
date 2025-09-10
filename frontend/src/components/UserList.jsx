import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const UserList = forwardRef((props, ref) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    fetchUsers
  }));

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <p className="mt-4 text-gray-500">Loading users...</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Registered Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user._id} className="border p-2 rounded bg-white shadow-sm hover:shadow-md transition">
              <span className="font-medium">{user.name}</span> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default UserList;
