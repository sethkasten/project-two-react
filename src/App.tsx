import "./App.css";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import BucketList from "./components/BucketList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/gifs/search" exact>
           <Home />
          </Route>
          <Route path="/gifs/:id/details" exact>
            <Details />
          </Route>
          <Route path="/gifs/favorites">
            <BucketList />
          </Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
