import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";
import Comments from './Pages/Comments/comments';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="iphone-container">
      <Header />
      <h1>Key Insights</h1>

      <Team />
      <Footer />
      <Router>
        <Routes>
          <Route path='/Comment' element={<Comments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
