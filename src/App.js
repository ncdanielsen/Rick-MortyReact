import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  Link 
} from 'react-router-dom';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import Character from './components/Character/Character';
import {Navbar} from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark">
          <Link to="/">
            <h3>Rick and Morty</h3>
          </Link>
        </Navbar>
        <Switch>
          <Route path="/:id" component={Character}/>
          <Route path="/" component={CharacterList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
