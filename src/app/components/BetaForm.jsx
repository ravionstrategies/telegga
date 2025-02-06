import React, { useState } from 'react';

const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  if (!email) {
    setError('Please enter an email address');
    return;
  }
  // ... rest of your submit logic
}

return (
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        setError(''); // Clear error when typing
      }}
      className={error ? 'input-error' : ''}
      placeholder="Email Address"
    />
    <div className={`error-message ${error ? 'visible' : ''}`}>
      {error}
    </div>
    <button type="submit">Join Beta</button>
  </form>
); 