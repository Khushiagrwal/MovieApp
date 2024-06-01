import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../public/Css/style.css'; // Import the CSS file

function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // use for prevent refresh after submit
    try {
      setLoading(true); // before request  
      const res = await fetch('http://localhost:8080/api/auth/signup',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/login');
    }
    catch (error) {
      setLoading(false);
      setError(error.message)
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <h1>Sign Up</h1>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" id="email" placeholder='Email' onChange={handleChange} />
        <input type="text" id="username" placeholder='Username' onChange={handleChange} />
        <input type="password" id="password" placeholder='Password' onChange={handleChange} />
        <button type="submit" className={loading ? 'loading' : ''}>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="signup-footer">
        <span>
          Have an account? <Link to='/login'>Sign In</Link>
        </span>
      </div>
    </div>
  );
}

export default Signup;
