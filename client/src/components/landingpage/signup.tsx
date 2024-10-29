import React, { useState } from 'react';

const Signup = () => {
  // State for each form field
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('');

  // State for handling submission status or error messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Example time zones array for the dropdown (can be expanded as needed)
  const timeZones = [
    'America/New_York',
    'America/Chicago',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Berlin',
    'Asia/Tokyo',
  ];

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset any previous messages
    setError('');
    setSuccess('');

    // Validate required fields
    if (!email || !password || !location || !timeZone) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      // Example API call (replace URL and structure based on your backend)
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, location, timeZone }),
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      // If signup is successful
      setSuccess('Signup successful! You can now log in.');
      setEmail('');
      setPassword('');
      setLocation('');
      setTimeZone('');
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="timeZone">Time Zone:</label>
          <select
            id="timeZone"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            required
          >
            <option value="">Select a time zone</option>
            {timeZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>

      {/* Display success or error messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Signup;
