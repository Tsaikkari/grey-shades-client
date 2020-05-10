import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FirstScreen from "../components/FirstScreen";
import GreysGrid from "../components/GreysGrid";
import Grey from "../components/Grey";

const AppRouter = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FirstScreen} exact={true} />
        <Route path="/greys" component={GreysGrid} exact={true} />
        <Route path="/greys/:id" component={Grey} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default AppRouter;