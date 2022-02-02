import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./assets/styles/main.scss";
import Dashboard from './components/dashboard/Dashboard';
import { ROUTES } from './routes';
import Index from './pages/Index';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path={[
              ROUTES.index,
              ROUTES.create,
              ROUTES.update,
            ]}
            exact
          >
            <Dashboard>
              <Switch>
                <Route path={ROUTES.index} exact component={Index} />
                <Route path={ROUTES.create} exact component={Create} />
                <Route path={ROUTES.update} exact component={Update} />
              </Switch>
            </Dashboard>
          </Route>
          {/*<Route path="/" component={NotFoundPage} />*/}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
