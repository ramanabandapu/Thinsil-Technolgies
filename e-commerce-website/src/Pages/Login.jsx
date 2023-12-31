import React, { useState } from 'react';
import './Login.css';
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
        navigate('/home')
        
        //  navigate('/');
      } else {
        alert('Invalid password.');
      }
    } else {
      alert('User not found. Please register.');
    }
  };

 


  return (
    <div className='login-div'>
    <div className='login-container'>

      <h2>Login Here</h2>
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
      <button onClick={handleLogin}>LOGIN</button>
    </div>
    </div>
  );
}

export default Login;
