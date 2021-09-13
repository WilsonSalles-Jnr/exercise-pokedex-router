import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Detalhes from './Componentes/Detalhes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1> Pokedex </h1>
      {/* <Pokedex pokemons={pokemons} /> */}
      <Route to='/' render={(rotProp)=> <Pokedex {...rotProp} pokemons={pokemons}/>}/>
      <Switch>
        <Route path='/:id' render={(rotProp)=><Detalhes {...rotProp} detalhes={pokemons}/>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;