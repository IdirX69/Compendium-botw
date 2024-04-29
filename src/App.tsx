import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Creatures from "./pages/Creatures";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creatures" element={<Creatures />} />
      </Routes>
    </Router>
  );
}

export default App;
