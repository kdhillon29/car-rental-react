import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VehicleModelsPage from "./pages/VehicleModelsPage";
function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<VehicleModelsPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
