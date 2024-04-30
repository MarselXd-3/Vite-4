import React from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <div>
      <h1>My Redux App</h1>
      <UserForm />
      <UserDetails />
    </div>
  );
};

export default App;
