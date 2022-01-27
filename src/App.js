import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services'
import Contact from './Contact'
import Project from './Project'
import Skills from './Skills'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/Services'>
            <Services />
          </Route>
          <Route path='/Contact'>
            <Contact />
          </Route>
          <Route path='/Project'>
            <Project />
          </Route>
          <Route path='/Skills'>
            <Skills/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
