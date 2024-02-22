import React from 'react';
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateMusic from './pages/CreateMusic';


function App() {
  return (
    <>
   
    
     <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route exact path="/createmusic" element={<CreateMusic/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
