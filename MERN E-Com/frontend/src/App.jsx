import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './pages/Home/index.jsx'
function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
