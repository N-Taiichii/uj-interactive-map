import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Foss from "./pages/foss";
import Lyngstad from "./pages/lyngstad";
import Mckth from "./pages/mckth";
import Orlady from "./pages/orlady";
import Reiland from "./pages/reiland";
import Sorkness from "./pages/sorkness";
import Taber from "./pages/taber";
import US from "./pages/us";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/foss-wellness-center" element={<Foss />} />
      <Route path="/lyngstad-center" element={<Lyngstad />} />
      <Route path="/mckenna-thielsch-center" element={<Mckth />} />
      <Route path="/orlady-hall" element={<Orlady />} />
      <Route path="/reiland-fine-arts-center" element={<Reiland />} />
      <Route path="/sorkness-center" element={<Sorkness />} />
      <Route path="/taber-hall" element={<Taber />} />
      <Route path="/unruh-sheldon-center" element={<US />} />
    </Routes>
  );
};

export default App;
