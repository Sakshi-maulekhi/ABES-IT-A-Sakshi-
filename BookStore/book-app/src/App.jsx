import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Book from './components/book.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'



function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
        
        
      <hr />
      <Book/>
      <br/>
      <Book/>
      <br/>
      <Book/>
      
    </div>
  )
}

export default App
