import { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const EventList = forwardRef((props, ref) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/events');
    const data = await res.json();
    setEvents(data);
    setLoading(false);
  };

  useImperativeHandle(ref, () => ({
    fetchEvents
  }));

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <p className="mt-4 text-gray-500">Loading events...</p>;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Upcoming Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events found.</p>
      ) : (
        <ul className="space-y-2">
          {events.map(event => (
            <li key={event._id} className="border p-2 rounded bg-white shadow-sm hover:shadow-md transition">
              <span className="font-medium">{event.title}</span> — {event.club?.name} — {new Date(event.date).toLocaleDateString()}
              <p className="text-sm text-gray-600">{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default EventList;
