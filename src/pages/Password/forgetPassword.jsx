import React, { useState } from 'react';
import { forgetpassword } from '../../apis/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState({
    email:''
  });
  const [msg,setMsg]=useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({
        ...email,
        [name]:value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await forgetpassword(email);
    if(data.code===1){
        setMsg('Password reset link sent successfully')
    }else{
        setMsg('Pls check the email')
    }
    
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default ForgotPassword;
