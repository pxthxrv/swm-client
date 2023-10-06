import { useState } from 'react'
import './App.scss'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>This is a h1 tag</h1>
    <h2>This is a h2 tag</h2>
    <h3>This is a h3 tag</h3>
    <h4>This is a h4</h4>
    <h5>This is a h5</h5>
    <p>This is a p tag</p>
    <a>This is an a tag</a>
    <Footer />
    </>
  )
}

export default App