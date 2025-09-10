import HealthCheck from './components/HealthCheck';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ClubForm from './components/ClubForm';
import ClubList from './components/ClubList';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import VacancyForm from './components/VacancyForm';
import VacancyList from './components/VacancyList';
import { useRef } from 'react';

function App() {
  const userListRef = useRef();
  const clubListRef = useRef();
  const eventListRef = useRef();
  const vacancyListRef = useRef();


  const refreshUsers = () => userListRef.current?.fetchUsers();
  const refreshClubs = () => clubListRef.current?.fetchClubs();
  const refreshEvents = () => eventListRef.current?.fetchEvents();
  const refreshVacancies = () => vacancyListRef.current?.fetchVacancies();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-xl font-bold">College Club & Event System</h1>

      <HealthCheck />

      {/* Users */}
      <div className="mt-6">
        <UserForm onUserAdded={refreshUsers} />
      </div>
      <div className="mt-6">
        <UserList ref={userListRef} />
      </div>

      {/* Clubs */}
      <div className="mt-10">
        <ClubForm onClubAdded={refreshClubs} />
      </div>
      <div className="mt-6">
        <ClubList ref={clubListRef} />
      </div>

      {/* Events */}
      <div className="mt-10">
        <EventForm onEventAdded={refreshEvents} />
      </div>
      <div className="mt-6">
        <EventList ref={eventListRef} />
      </div>
      {/* Vacancies */}
      <div className="mt-10">
         <VacancyForm onVacancyAdded={refreshVacancies} />
      </div>
      <div className="mt-6">
         <VacancyList ref={vacancyListRef} />
      </div>
    </div>
  );
}

export default App;
