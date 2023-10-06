import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import Comments from "./Pages/Comments/comments";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/comment" element={<Comments />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
