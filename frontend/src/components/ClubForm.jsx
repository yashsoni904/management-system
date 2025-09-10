import { useState } from 'react';

export default function ClubForm({ onClubAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/clubs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });

    if (res.ok) {
      setSuccess('✅ Club added successfully!');
      setName('');
      setDescription('');
      if (onClubAdded) onClubAdded();
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Club Name"
        className="border p-2 w-full"
        required
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 w-full"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Create Club
      </button>
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
