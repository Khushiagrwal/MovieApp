// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../public/Images/logo.png';
// import '../../public/Css/style.css';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();

//   // Function to clear userId from localStorage
//   const clearUserIdFromLocalStorage = () => {
//     localStorage.removeItem('userId');
//     navigate('/');
//   };

//   // Call the function to clear userId from localStorage when user logs out or session expires
//   const handleLogout = () => {
//     clearUserIdFromLocalStorage();
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo" />
//         </div>
//         <nav className="nav">
//           <ul className="nav-links">
//             {userId && (
//               <>
//                 <li className="nav-item">
//                   <Link to="/watchlist" className="nav-link">Watchlist</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="" onClick={handleLogout} className="nav-link">Logout</Link>
//                 </li>
//               </>
//             )}
//             {!userId && (
//               <li className="nav-item">
//                 <Link to="/login" className="nav-link">Login</Link>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/Images/logo.png';
import '../../public/Css/style.css'; // Import the CSS file

function Header() {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  // Function to clear userId from localStorage
  const clearUserIdFromLocalStorage = () => {
    localStorage.removeItem('userId');
    navigate('/');
  };

  // Call the function to clear userId from localStorage when user logs out or session expires
  const handleLogout = () => {
    clearUserIdFromLocalStorage();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav">
          <ul className="nav-links">
            {userId && (
              <>
                <li className="nav-item">
                  <Link to="/watchlist" className="nav-link">Watchlist</Link>
                </li>
                <li className="nav-item">
                  <Link to="" onClick={handleLogout} className="nav-link">Logout</Link>
                </li>
              </>
            )}
            {!userId && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
