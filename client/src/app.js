import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/dashboard';
import SetPage from './components/SetPage';
import QuestionPage from './components/QuestionPage';
import Add from './components/Add';
import Doesnotexist from './components/Doesnotexist';


const App = () => (
  <BrowserRouter>
   <Switch>
      <Route path="/" component ={LandingPage} exact={true} />
      <Route path="/dashboard" component ={Dashboard} />
      <Route path="/setpage" component ={SetPage} /> 
      <Route path="/questionpage" component ={QuestionPage} />
      <Route path="/add" component ={Add} /> 
      <Route component={Doesnotexist} />    
   </Switch>
  </BrowserRouter>
);

export default App;
