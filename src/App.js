import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserCard from './components/userCard'
import User from './components/user'

import './App.css'
 function App() {

  return (
    <div className="App_Center">
      {/* <User /> */}
     <Router >
        <Routes>
          <Route path="/" exact element={<User />}/>
          <Route path="/user/:userId" exact element={<UserCard/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App
 

