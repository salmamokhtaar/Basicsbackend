// app/signup/page.js
"use client"; // Correct "use client" directive

import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      alert('User created successfully!');
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleChange} required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleChange} required />
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
}
