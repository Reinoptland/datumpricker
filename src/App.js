import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Afspraak from "./pages/Afspraak";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wat from "./components/Wat";
import DatePickerProvider from "./contexts/DatePickerProvider";

function App() {
  return (
    <DatePickerProvider>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/afspraak-maken">Prik een datum</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/wat">Wat</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/afspraak-maken">
              <Afspraak />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/wat">
              <Wat />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </DatePickerProvider>
  );
}

export default App;
