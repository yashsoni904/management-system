import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const VacancyList = forwardRef((props, ref) => {
  const [vacancies, setVacancies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVacancies = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/vacancies');
    const data = await res.json();
    setVacancies(data);
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    fetchVacancies
  }));

  useEffect(() => {
    fetchVacancies();
  }, []);

  // ✅ Add handleApply function here
  const handleApply = async (vacancyId) => {
    // For now, hardcode a userId until authentication is added
    const userId = '68c169e706a1b988ef909ef9'; // Replace with a real user ID from your DB
    const res = await fetch('http://localhost:5000/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, vacancyId })
    });

    const data = await res.json();
    if (res.ok) {
      alert('✅ Applied successfully!');
    } else {
      alert(`❌ ${data.error}`);
    }
  };

  if (loading) return <p className="mt-4 text-gray-500">Loading vacancies...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Available Vacancies</h2>
      {vacancies.length === 0 ? (
        <p className="text-gray-500">No vacancies found.</p>
      ) : (
        <ul className="space-y-2">
          {vacancies.map(vacancy => (
            <li
              key={vacancy._id}
              className="border p-2 rounded bg-white shadow-sm hover:shadow-md transition"
            >
              <span className="font-medium">{vacancy.title}</span> — {vacancy.club?.name}
              <p className="text-sm text-gray-600">{vacancy.description}</p>
              <p className="text-sm text-gray-500">Slots: {vacancy.slots}</p>

              {/* ✅ Apply button */}
              <button
                onClick={() => handleApply(vacancy._id)}
                className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
              >
                Apply
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default VacancyList;
