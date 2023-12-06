import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Register from './components/register/Register';
import './index.scss';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
