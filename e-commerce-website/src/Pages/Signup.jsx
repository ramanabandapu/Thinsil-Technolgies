import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
function Signup() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = () => {
    // Save user data to local storage 
    localStorage.setItem(formData.email, JSON.stringify(formData));
    alert('Registration successful!');
    navigate("./login");

  };

  return (
    <div className='signup-div'>
      <div className='signup-container'>
      <h2>Registration</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleRegistration}>Register</button>
      <span>Already have an account? Login <a href='/login'>here</a></span>
      </div>
    </div>
  );
}

export default Signup;
