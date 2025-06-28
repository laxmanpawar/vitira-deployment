import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.text())
      .then(setMessage)
      .catch(() => setMessage('Error fetching backend'))
  }, [])

  return (
    <div className="App">
      <h1>React + Vite Frontend</h1>
      <p>Backend says: <b>{message}</b></p>
    </div>
  )
}

export default App
