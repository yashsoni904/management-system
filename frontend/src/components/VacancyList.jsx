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

  if (loading) return <p className="mt-4 text-gray-500">Loading vacancies...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Available Vacancies</h2>
      {vacancies.length === 0 ? (
        <p className="text-gray-500">No vacancies found.</p>
      ) : (
        <ul className="space-y-2">
          {vacancies.map(vacancy => (
            <li key={vacancy._id} className="border p-2 rounded bg-white shadow-sm hover:shadow-md transition">
              <span className="font-medium">{vacancy.title}</span> — {vacancy.club?.name}
              <p className="text-sm text-gray-600">{vacancy.description}</p>
              <p className="text-sm text-gray-500">Slots: {vacancy.slots}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default VacancyList;
