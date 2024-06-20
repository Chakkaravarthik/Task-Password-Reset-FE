import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetpassword } from '../../apis/auth';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setMessage("Invalid request: Missing token.");
      return;
    }

    const resetPassword = async () => {
      try {
        const data = await resetpassword({ token, password });
        if (data.code === 1) {
          setMessage('Password changed successfully.');
        } else {
          setMessage('Failed to change password.');
        }
      } catch (error) {
        setMessage('An error occurred while changing the password.');
      }
    };

    if (password) {
      resetPassword();
    }
  }, [password, searchParams]);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password) {
      setMessage('Updating password...');
    } else {
      setMessage('Please enter a new password.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ResetPassword;
