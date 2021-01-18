import React from 'react';
import './App.scss';
import HotelList from './Components/HotelList/HotelList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './Components/Form/Form';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={HotelList} />
          <Route exact path="/payment" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
