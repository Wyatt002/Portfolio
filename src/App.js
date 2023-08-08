import logo from './assets/img/logo.svg';
import './App.css';
import PNav from './NavBar';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <PNav />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
