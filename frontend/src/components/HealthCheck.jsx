import { useEffect, useState } from 'react';

export default function HealthCheck() {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('error'));
  }, []);

  return (
    <div className="mt-4 text-sm">
      <span className="font-medium">Backend status:</span> {status}
    </div>
  );
}
