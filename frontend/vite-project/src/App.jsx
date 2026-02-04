import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card.jsx';
import Navbar from './components/Navbar.jsx';
import Usestate from './components/Usestate.jsx';
import count1 from './components/count1.jsx';
import Link1 from './components/link1.jsx';
import Button from './components/Button.jsx';
import APIFetch from './components/APIFetch.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
      {/* <br/>
      
     <div>

      <Card name="sakshi"/>
      <br/>
      <Card name="rakhi"/>
      <br/>
      <Card name="shalini"/>
      <br/>
      <Card name="riya"/>

      <div>
        <Button/>
      </div> */}
      <APIFetch/>

      </div>
    </>
  )
}

export default App