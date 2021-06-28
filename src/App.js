import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import productListPage from './containers/productListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ="/" exact component={HomePage}/>
          <Route path ="/:slug"  component={productListPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
