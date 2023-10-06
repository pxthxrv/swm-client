import { useState } from "react";
import "./App.scss";
import Calendar from "./components/Calendar/Calendar";
import Keyinsights from "./components/KeyInsights/keyinsights";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="iphone-container">
      <Header />
      <Keyinsights />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
