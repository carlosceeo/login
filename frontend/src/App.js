import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use Routes instead of Switch
import Login from './Login';
import LandingPage from './LandingPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/landing" element={<LandingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;