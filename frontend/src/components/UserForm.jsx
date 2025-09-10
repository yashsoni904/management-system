import { useState } from 'react';

export default function UserForm({ onUserAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });

    if (res.ok) {
      setSuccess('✅ User added successfully!');
      setName('');
      setEmail('');
      if (onUserAdded) onUserAdded();
      setTimeout(() => setSuccess(''), 3000); // clear after 3s
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Name"
        className="border p-2 w-full"
        required
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create User
      </button>
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
