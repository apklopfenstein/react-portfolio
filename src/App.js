import React from 'react';
import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <HashRouter basename='/'>
      <Header />

      <main>
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
      </main>

      <Footer />
    </HashRouter>
  );
}

export default App;
