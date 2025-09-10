import HealthCheck from './components/HealthCheck';
import UserForm from './components/UserForm';
import UserList from './components/UserList'; //new import

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-xl font-bold">College Club & Event System</h1>

      {/* Health check component */}
      <HealthCheck />

      {/* User creation form */}
      <div className="mt-6">
        <UserForm />
      </div>

      {/* User list display */}
      <div className="mt-6">
        <UserList />
      </div>
    </div>
  );
}

export default App;
