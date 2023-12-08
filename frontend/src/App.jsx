import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from "./Components/Navbar";
import { List } from './Components/list'
import { Chat  } from "./Components/Chat";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar/>
        <List/>
        <Chat/>
      </div>
    </>


  )
}

export default App
