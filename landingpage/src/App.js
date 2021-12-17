import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Calorilin from './Calorilin'
import Privacy from './Privacy'
import Terms from './Terms'
 
function App() {
  return (
    <Router >
      <Switch>
        <div className="app-content">
          <Route path="/" exact component={Calorilin} />
          <Route path="/Privacy" exact component={Privacy} />
          <Route path="/Terms" exact component={Terms} />
        </div>
      </Switch>
    </Router>
  );
}
 
export default App;