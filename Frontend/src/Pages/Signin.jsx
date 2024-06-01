// import React, { useState } from 'react';
// import { Link , useNavigate} from 'react-router-dom';


// function Signin() {
//   const [formData, setFormData] = useState({});
//   const [error,setError]=useState(null);
//   const [loading,setLoading]=useState(false);
//   const navigate=useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value
//     });
//   };

//   const handleSubmit=async(e)=>{
//     e.preventDefault();  // use for prevent refresh after submit
//     try{
//     setLoading(true);// before request  
//     const res=await fetch('http://localhost:8080/api/auth/login',
//     {
//       method:'post',
//       headers:{
//         'Content-Type':'application/json',
//       },
//       body:JSON.stringify(formData),
//     });
     
//     const data=await res.json();
//     console.log(data);

//     if(data.success===false)
//     {
//       setError(data.message);
//       setLoading(false);
//       return;
//     }
//     setLoading(false);
//     setError(null);
//     localStorage.setItem('userId', data._id);
//     navigate('/');
//   }
//   catch(error)
//   {
//     setLoading(false);
//     setError(error.message)
//   }
//   };
//   console.log(formData)
//   return (
//     <div>
//       <div>
//         <h1>Sign In</h1>
//       </div>
//       <div></div>
//       <div>or</div>
//       <form onSubmit={handleSubmit}>
//         <input type="email" id="email" placeholder='Email' onChange={handleChange} />
//         <input type="password" name="" id="password" placeholder='Password' onChange={handleChange} />
//         <button type="submit">{loading ? 'Loading...':'Sign In'}</button> {/* Changed button text to "Sign up" */}
//         <div>
//           {/* <OAuth/> */}
//         </div>
//         <div>
//           <span>
//           Don't have an account? <Link to='/signup'>Sign up</Link>
//           </span>
//         </div> 
//         {error && <p className='text-red-500 mt-5'>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Signin;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../public/Css/style.css'; // Import the CSS file

function Signin() {
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
      const res = await fetch('http://localhost:8080/api/auth/login',
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
      localStorage.setItem('userId', data._id);
      navigate('/');
    }
    catch (error) {
      setLoading(false);
      setError(error.message)
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-header">
        <h1>Sign In</h1>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <input type="email" id="email" placeholder='Email' onChange={handleChange} />
        <input type="password" id="password" placeholder='Password' onChange={handleChange} />
        <button type="submit" className={loading ? 'loading' : ''}>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
      <div className="signin-footer">
        <span>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;
