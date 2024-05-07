import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skill/Skills";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
