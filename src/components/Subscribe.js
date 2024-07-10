// src/components/Subscribe.js
import React, { useState } from 'react';
import axios from 'axios';

const Subscribe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/subscribe', { name, email, age });
            console.log('Subscription response:', response.data);
            // Redirect or show success message after subscription
        } catch (error) {
            console.error('Subscription error:', error);
            // Handle error display or logging
        }
    };

    return (
        <div>
            <h2>Subscribe to Newsletter</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;
