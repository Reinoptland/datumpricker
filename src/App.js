import { useState, createContext } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Afspraak from "./pages/Afspraak";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Wat from "./components/Wat";

// context is an object
// export de context, zodat je hem elders kan importeren
// gebruik export, niet export default
export const datePickerContext = createContext({});

function App() {
  console.log("WAT IS CONTEXT VOOR EEN DING:", datePickerContext);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [locatie, setLocatie] = useState("");

  return (
    <datePickerContext.Provider
      value={{
        title: title,
        setTitle: setTitle,
        type: type,
        setType: setType,
        description: description,
        setDescription: setDescription,
        locatie: locatie,
        setLocatie: setLocatie,
      }}
    >
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
    </datePickerContext.Provider>
  );
}

export default App;
