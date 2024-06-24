import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";
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
        <Route path="/" element={<Page element="creatures" />} />
        <Route path="/equipements" element={<Page element="equipment" />} />
        <Route path="/materials" element={<Page element="materials" />} />
        <Route path="/monsters" element={<Page element="monsters" />} />
        <Route path="/treasure" element={<Page element="treasure" />} />
      </Routes>
    </Router>
  );
}

export default App;
