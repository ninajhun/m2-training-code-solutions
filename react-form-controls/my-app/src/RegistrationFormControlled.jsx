import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('username: ', username, 'password: ', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"></input>
      </label>
      <label>
        Password
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
