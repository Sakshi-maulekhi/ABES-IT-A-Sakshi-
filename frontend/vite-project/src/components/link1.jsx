import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home(){
    return <h1>This is my Home Page</h1>
}
function About(){
    return <h1>This is my About Page</h1>
}
function Link1() {
  return (
    <div>
        <nav>
            <Link  to = "/">Home</Link>
            <Link  to = "/about">About</Link>
            <Link  to = "/contact">Contact</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      Link1
    </div>
  )
}

export default Link1
