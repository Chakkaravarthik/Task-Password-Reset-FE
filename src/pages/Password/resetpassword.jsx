import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetpassword, verifypassword } from '../../apis/auth';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValidToken, setIsValidToken] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          const data = await verifypassword({ token });
          console.log(token);
          if (data.code === 1) {
            setIsValidToken(true);
          } else {
            setMessage("Invalid or expired token.");
          }
        } catch (error) {
          setMessage("An error occurred while verifying the token.");
        }
      } else {
        setMessage("Invalid request: Missing token.");
        return;

      }
    };
    verifyToken();
  }, [token]);

  useEffect(() => {
    const resetPassword = async () => {

    };

    if (password) {
      resetPassword();
    }
  }, [password, token]);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password) {
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
    } else {
      setMessage('Please enter a new password.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reset Password</h2>
      {isValidToken ? (
        <>
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
        </>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default ResetPassword;
