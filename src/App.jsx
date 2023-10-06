import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import CommentsComponent from './Pages/Comments/comments';

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
      <Router>
        <Routes>
          <Route path='/Comment' element={<CommentsComponent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App