import Showcase from "./components/homepage/Showcase";
import WhoWeAre from "./components/homepage/WhoWeAre";
import HowWeDoIt from "./components/homepage/HowWeDoIt";
import HaveAQuestion from "./components/homepage/HaveAQuestion";
import Footer from "./components/homepage/Footer";

function App() {
  return (
    <div className="App">
     <Showcase/>
     <WhoWeAre/>
     <HowWeDoIt/>
     <HaveAQuestion/>
     <Footer/>
    </div>
  );
}

export default App;
