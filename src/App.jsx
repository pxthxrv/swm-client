import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="iphone-container">
      <Header />
      <h1>Key Insights</h1>

      <Team />
      <Footer />
    </div>
  );
}

export default App;
