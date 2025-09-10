import HealthCheck from './components/HealthCheck';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useRef } from 'react';

function App() {
  const userListRef = useRef();

  const refreshUsers = () => {
    if (userListRef.current) {
      userListRef.current.fetchUsers();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-xl font-bold">College Club & Event System</h1>

      <HealthCheck />

      <div className="mt-6">
        <UserForm onUserAdded={refreshUsers} />
      </div>

      <div className="mt-6">
        <UserList ref={userListRef} />
      </div>
    </div>
  );
}

export default App;
