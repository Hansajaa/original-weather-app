import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row">
          <SearchBar></SearchBar>
        </div>
      </div>
    </>
  )
}

export default App
