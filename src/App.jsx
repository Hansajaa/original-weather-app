import "./App.css";
import Footer from "./components/Common/Footer";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="home-page blur">
        <div className="container content">
          
            <Navbar></Navbar>
  
        </div>
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
