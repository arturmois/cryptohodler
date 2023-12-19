import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './public/Login/Login';
import Settings from './private/Settings/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}