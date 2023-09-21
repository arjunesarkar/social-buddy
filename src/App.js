import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import PostDetail from "./Components/PostDetail/PostDetail";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/home">Home2</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/dashboard">
          </Route>
          <Route path="/post/:id" element={<PostDetail />}></Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
