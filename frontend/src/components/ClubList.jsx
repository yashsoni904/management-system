import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const ClubList = forwardRef((props, ref) => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClubs = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/clubs');
    const data = await res.json();
    setClubs(data);
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    fetchClubs
  }));

  useEffect(() => {
    fetchClubs();
  }, []);

  if (loading) return <p className="mt-4 text-gray-500">Loading clubs...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Registered Clubs</h2>
      {clubs.length === 0 ? (
        <p className="text-gray-500">No clubs found.</p>
      ) : (
        <ul className="space-y-2">
          {clubs.map(club => (
            <li key={club._id} className="border p-2 rounded bg-white shadow-sm hover:shadow-md transition">
              <span className="font-medium">{club.name}</span> — {club.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default ClubList;
