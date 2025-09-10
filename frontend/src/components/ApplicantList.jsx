import { useEffect, useState } from 'react';

export default function ApplicantList({ vacancyId }) {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/applications/${vacancyId}`)
      .then(res => res.json())
      .then(data => setApplicants(data));
  }, [vacancyId]);

  return (
    <div className="mt-4">
      <h3 className="font-semibold">Applicants</h3>
      {applicants.length === 0 ? (
        <p className="text-gray-500">No applicants yet.</p>
      ) : (
        <ul className="list-disc pl-5">
          {applicants.map(app => (
            <li key={app._id}>
              {app.user.name} ({app.user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
