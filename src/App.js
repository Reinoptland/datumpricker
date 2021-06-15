import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Afspraak from "./pages/Afspraak";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [locatie, setLocatie] = useState("");

  return (
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
          </ul>
        </nav>

        <Switch>
          <Route path="/afspraak-maken">
            <Afspraak
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              type={type}
              setType={setType}
              locatie={locatie}
              setLocatie={setLocatie}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
