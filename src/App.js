import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Typewriter from './components/typewriter/Typewriter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Typewriter 
        text={
          [
            "MERN Stack Developer",
            "Software Developer"
          ]
        }
        typingSpeed = {100}
        deletingSpeed = {50}
        duration = {500}
      />
    </div>
  );
}

export default App;
