import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './Component/Header'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Blog from './Pages/Blog'
import Pricing from './Pages/Pricing'
import Resouces from './Pages/Resouces'
import Tryitnow from './Pages/Tryitnow'
import Home from './Pages/Home'
import Logout from './Pages/Logout';
import Upgrade from './Pages/Upgrade';
import UpgradePlan from './Pages/UpgradePlan';
import Payment from "./Pages/Payment";
import Cancel from "./Pages/Cancel"
import Success from "./Pages/Success";
import ShowBlogs from './Pages/ShowBlogs';


function App() {
  
  return (
    <div>
      <Router>
      {/* <Header/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/resources' element={<Resouces/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Signin/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/try' element={<Tryitnow/>}></Route>
          <Route path='/upgrade' element={<Upgrade/>}></Route>
          <Route path='/upgradeplans' element={<UpgradePlan/>}></Route>
          <Route path='/pay' element={<Payment/>} ></Route>
          <Route path='/success' element={<Success/>} ></Route>
          <Route path='/cancel' element={<Cancel/>} ></Route>
          <Route path='/showblog' element={<ShowBlogs/>} ></Route>
          <Route path='/addBlog' element={<Blog/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App