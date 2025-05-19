import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes></Routes>
    </Router>
  );
}

export default App;
