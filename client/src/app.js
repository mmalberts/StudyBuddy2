import React from "react";
import {BrowserRouter , Route, Switch} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/dashboard";
import SetPage from "./pages/SetPage";
import QuestionPage from "./pages/QuestionPage";
import Add from "./pages/Add";
import Doesnotexist from "./pages/Doesnotexist";

const App = () => (
  <BrowserRouter>
   <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/setpage" component={SetPage} /> 
      <Route path="/questionpage" component={QuestionPage} />
      <Route path="/add" component={Add} /> 
      <Route component={Doesnotexist} />    
   </Switch>
  </BrowserRouter>
);

export default App;