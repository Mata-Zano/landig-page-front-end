import { Route, Routes, Link } from "react-router-dom";
import Navegador from "./Navegador";
import PiePag from "./PiePag";
function CatalogoPag() {
  return (
    <div>
      <div className="row">
        <h1 className="text-center">Bienvenidos a Catalogo</h1>
      </div>
      <Navegador className="row" />
      <div  className="row">
        <p>Bienvenido a la pagina y el contenido principal </p>
      </div>
      <footer  className="row">
        <PiePag />
      </footer>

      {/*       
      <Link to={"/proyectos"}>Ir a Proyectos</Link>
      <br />
      <Link to={"/contactos"}>Ir a Contactos</Link>
      <br/>
      <Link to={"/landig"}>Ir a Landig</Link> */}
    </div>
  );
}
export default CatalogoPag;
