import './App.css';

import Main from "./pages/main"
import Biography from "./pages/biography"
import Projects from "./pages/projects"
import Thread from './pages/thread'
import Api from './api/api'
import Board from './pages/board'

import {
  Routes, 
  Route, 
  useNavigate,
  useRoutes, 
  useParams, 
} from "react-router-dom";
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate();

  async function handleNavigate(routename) {
    console.log("value of routename: " + routename)
    navigate("../"+routename);
  }

  return (
    <div className='mainbackground'>
      <Routes> 
        <Route path="/" element={<Main handleNavigate={handleNavigate} />} />
        <Route path="/board" element={<Board />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/thread/:threadnumber" element={<Thread />} />
      </Routes>
      <Api/>
    </div>
  );
}

export default App;