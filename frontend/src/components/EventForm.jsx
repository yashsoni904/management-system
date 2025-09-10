import { useState, useEffect } from 'react';

export default function EventForm({ onEventAdded }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [clubId, setClubId] = useState('');
  const [clubs, setClubs] = useState([]);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/clubs')
      .then(res => res.json())
      .then(data => setClubs(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, description, club: clubId })
    });

    if (res.ok) {
      setSuccess('✅ Event added successfully!');
      setTitle('');
      setDate('');
      setDescription('');
      setClubId('');
      if (onEventAdded) onEventAdded();
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Event Title" className="border p-2 w-full" required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} className="border p-2 w-full" required />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="border p-2 w-full" required />
      <select value={clubId} onChange={e => setClubId(e.target.value)} className="border p-2 w-full" required>
        <option value="">Select Club</option>
        {clubs.map(club => (
          <option key={club._id} value={club._id}>{club.name}</option>
        ))}
      </select>
      <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Create Event</button>
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
