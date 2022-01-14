
import './App.css';
import Home from './pages/home';
import Nav from './components/nav';
import Contact from "./components/contact/contact";
import Projects from './pages/projects';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/services">
        </Route>
      </div>
    </Router>
  );
}

export default App;