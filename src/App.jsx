import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Features from "./components/Features";

function App() {
  return (
    <Router>
      <Nav />
      <Landing />
      <Features />
      <Routes></Routes>
    </Router>
  );
}

export default App;
