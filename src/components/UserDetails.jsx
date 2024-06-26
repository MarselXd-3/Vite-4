import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
};

export default UserDetails;
