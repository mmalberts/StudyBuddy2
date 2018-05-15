import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddQuestion from "./pages/AddQuestion";
import AddUnit from "./pages/AddUnit";
import Dashboard from "./pages/Dashboard";
import DoesNotExist from "./pages/DoesNotExist";
import LandingPage from "./pages/LandingPage";
import QuestionPage from "./pages/QuestionPage";
import Unit from "./pages/Unit";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <Route path="/addquestion/:unitId" component={AddQuestion} />
            <Route path="/addunit" component={AddUnit} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/question/:unitId" component={QuestionPage} />
            <Route path="/unit/:id" component={Unit} />
            <Route component={DoesNotExist} />
        </Switch>
    </BrowserRouter>
);

export default App;