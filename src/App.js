import { Route, Routes, Link } from "react-router-dom";
import Inicio from "./componets/Inicio";
import Contactos from "./componets/Contactos";
import Proyectos from "./componets/Proyectos";
import Landig from "./componets/Landig";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/landig" element={<Landig />} />
      </Routes>
    </>
  );
}
export default App;
