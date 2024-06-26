import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";

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
