import { Route, Routes, Link } from "react-router-dom";
import Contactos from "./componets/ContactosPag";
import LandigPag from "./componets/LandigPag";
import CatalogoPag from "./componets/CatalogoPag";
import NosotrosPag from "./componets/NosotrosPag";


function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<LandigPag />} />
        <Route path="/catalogo" element={<CatalogoPag/>} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/nosotros" element={<NosotrosPag/>} />
      </Routes>
    </div>
  );
}
export default App;
