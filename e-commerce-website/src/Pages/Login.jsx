import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const storedUserData = localStorage.getItem(formData.email);

    if (storedUserData) {
      const user = JSON.parse(storedUserData);

      if (user.password === formData.password) {
        alert('Login successful!');
        
         navigate('/');
      } else {
        alert('Invalid password.');
      }
    } else {
      alert('User not found. Please register.');
    }
  };

 


  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
