// import { useEffect , useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Dashboard from './layout/Dashboard';
import Login from './layout/Auth';
import User from './layout/User';
import Artists from './layout/Artists';
import Albums from './layout/Albums';
import Playlist from './layout/Playlist';
import Redirect from './layout/Redirect';
import Trends from './layout/Trends';

function App() {

  return (
    <div className="App">
      <p className="announcement-bar">This is for learning purposes only</p>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dash" element={<Dashboard />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/artists" element={<Artists />}></Route>
        <Route path="/albums" element={<Albums />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
        <Route path="/trends" element={<Trends />} />
        <Route path="/redirect" element={<Redirect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
