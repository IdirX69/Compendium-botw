import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Creatures from "./pages/Creatures";
import Equipements from "./pages/Equipements";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creatures" element={<Creatures />} />
        <Route path="/equipements" element={<Equipements />} />
      </Routes>
    </Router>
  );
}

export default App;
