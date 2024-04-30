import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from './userSlice';

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="Gender" />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
