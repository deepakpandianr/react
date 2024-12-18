import { useState } from 'react'
import './App.css'
import Form from './Form'
import Header from './Header'
import Players from './Players'
import './assets/style.css'

function App() {


  const [player, setPlayer] = useState("Test")

  return (
    <div className='scoreboard'>
      <Header />
      <Players player={player} />
      <Form />
    </div>
  )
}

export default App
