import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddUnit from "./pages/AddUnit";
import Dashboard from "./pages/Dashboard";
import DoesNotExist from "./pages/DoesNotExist";
import LandingPage from "./pages/LandingPage";
import QuestionPage from "./pages/QuestionPage";
import Unit from "./pages/Unit";
import AddQuestion from "./pages/AddQuestion/AddQuestion";

const App = () => (

  <BrowserRouter>
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/add" component={AddUnit} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/questionpage" component={QuestionPage} />
      <Route path="/unit/:id" component={Unit} />
      <Route path="/AddQuestion/:unitId" component={AddQuestion} />
      <Route component={DoesNotExist} />
    </Switch>
  </BrowserRouter>

);

export default App;
