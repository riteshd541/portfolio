import "./App.css";
import Aboutme from "./components/About Me/Aboutme";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero Section/Hero";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Recent Projects/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutme />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
