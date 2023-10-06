
import Keyinsights from "../components/KeyInsights/keyinsights";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Team from "../components/Team/Team";

function Home() {

    return (
      <div className="iphone-container">
        <Header />
        
        <Keyinsights />
        <Team />
        <Footer />
      </div>
    );
  }
  
  export default Home;