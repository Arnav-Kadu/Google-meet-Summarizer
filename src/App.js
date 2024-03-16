import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthContext'; // Adjust the path as necessary
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SummariesSection from './components/SummariesSection';
import TranscriptToSummarize from './components/TranscriptToSummarize';
import UploadSection from './components/UploadSection';
import './App.css'
// Protect a route
const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute><SummariesSection /></ProtectedRoute>} />
            <Route path="/summarize-transcript" element={<ProtectedRoute><TranscriptToSummarize /></ProtectedRoute>} />
            <Route path="/summarize-recording" element={<ProtectedRoute><UploadSection /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
