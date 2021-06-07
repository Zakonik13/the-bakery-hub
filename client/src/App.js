import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// Components and Pages
import Menu from './pages/Menu';
import Home from './pages/Home';
import Contact from './components/Contact';
import Navigation from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;