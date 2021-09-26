import './App.css';
import { Register } from './Components/RegisterPage';
import { SignInPage } from './Components/SignInPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Switch/>
            <Route exact path="/" component={SignInPage} />
            <Route exact path="/Register" component={Register} />
          <Switch/>
    </BrowserRouter>
  );
}

export default App;
