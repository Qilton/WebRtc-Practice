import { useState } from 'react'
import {Route,Routes} from "react-router-dom"
import Room from './pages/room'
import Lobby from './pages/Lobby'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Lobby/>} />
      <Route path="/room/:roomId" element={<Room/>} />
      </Routes>
     
    </>
  )
}

export default App
