import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Creatures from "./pages/Creatures";
import Equipements from "./pages/Equipements";
import Materials from "./pages/Materials";
import Monsters from "./pages/Monsters";
import Treasure from "./pages/Treasure";

import ModalInfo from "./components/ModalInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/creatures/:id"
          element={<ModalInfo category="creatures" />}
        />
        <Route
          path="/equipment/:id"
          element={<ModalInfo category="equipment" />}
        />
        <Route
          path="/materials/:id"
          element={<ModalInfo category="materials" />}
        />
        <Route
          path="/monsters/:id"
          element={<ModalInfo category="monsters" />}
        />
        <Route
          path="/treasure/:id"
          element={<ModalInfo category="treasure" />}
        />
        <Route path="/" element={<Home element="creatures" />} />
        <Route path="/creatures" element={<Home element="creatures" />} />
        <Route path="/equipements" element={<Home element="equipment" />} />
        <Route path="/materials" element={<Home element="materials" />} />
        <Route path="/monsters" element={<Home element="monsters" />} />
        <Route path="/treasure" element={<Home element="treasure" />} />
      </Routes>
    </Router>
  );
}

export default App;
