import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Nav />
      <Landing />
      <Routes></Routes>
    </Router>
  );
}

export default App;
