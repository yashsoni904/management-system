import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      {/* Left side: App name */}
      <div className="text-lg font-bold">College Club & Event System</div>

      {/* Right side: Navigation links */}
      <div className="flex items-center gap-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/events" className="hover:underline">Events</a>
        <a href="/vacancies" className="hover:underline">Vacancies</a>

        {user ? (
          <>
            {/* Welcome message */}
            <span className="text-sm">
              Welcome, <strong>{user.name}</strong> ({user.role})
            </span>

            {/* Admin-only link */}
            {user.role === 'admin' && (
              <a href="/admin" className="hover:underline">Admin Panel</a>
            )}

            {/* Logout button */}
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          // If not logged in
          <a
            href="/login"
            className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
          >
            Login
          </a>
        )}
      </div>
    </nav>
  );
}
