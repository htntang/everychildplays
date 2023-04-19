import React, { useState, useEffect } from 'react'

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      username: '',
      email: '',
      password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await fetch('http://localhost:5005/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      return (
        <form className="register" onSubmit={handleSubmit}>

          <h1>Register</h1>

          <label>
            Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <label>
            Username:
            <input type="text" name="username" onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={handleChange} />
          </label>
          <button type="submit">Register</button>
        </form>
      );
    };
    
    export default RegistrationPage;
