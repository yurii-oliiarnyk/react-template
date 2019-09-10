import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="container">
          <Switch>
            <Route path="/" exact render={props => <Home {...props} />} />
            <Route path="/news" component={() => <>News</>} />
            <Route path="/profile" component={() => <>Profile</>} />
            <Route path="/login" component={() => <>Log in</>} />
            <Route path="/" component={() => <>Error</>} />
          </Switch>
        </div>
      </Layout>
    </div>
  );
}

export default App;
