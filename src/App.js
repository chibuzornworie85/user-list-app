import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import UserDetailsPage from "./views/UserDetailsPage";
import './index.css'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
