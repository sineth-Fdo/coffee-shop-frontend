'use client'

import React, { useEffect, useState } from 'react'

import Cookies from 'js-cookie';


const page = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState({});
  
  
    const handleSubmit = async (e : any) => {
      e.preventDefault();
  
      const res = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password}),
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        Cookies.set('token', data, { expires: 10 });
        alert('Login successful');
      
      } else {
        alert('Login failed');
      }
    };


    
    useEffect(() => {
      const token = Cookies.get('token');
      if (!token) {
        alert('Not authenticated');
      }else {
        
      }
    }, []);

  return (
    <div>
    <h1>Login page</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    <br />
  </div>
  )
}

export default page
