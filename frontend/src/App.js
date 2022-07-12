import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

import LandingPage from './pages/LandingPage';
import Cars from './pages/Cars';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

import './assets/css/style.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path="/cars" component={Cars} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
