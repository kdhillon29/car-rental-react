import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Banner from "./components/Banner";
import Choose from "./components/Choose";
function App() {
  return (
    <Router>
      <Nav />
      <Landing />
      <Features />
      <Banner />
      <Choose />
      <Routes></Routes>
    </Router>
  );
}

export default App;
