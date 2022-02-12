import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is the home page
      </Route>
      <Route exact path="/starred">
        This is the starred page
      </Route>
      <Route>404 page not found</Route>
    </Switch>
  );
}

export default App;
