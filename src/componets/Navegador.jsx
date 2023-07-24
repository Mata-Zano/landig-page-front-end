import { Route, Routes, Link } from "react-router-dom";
import Libros from "../assets/logo_libro.png";
import "./style.css";
function Navegador() {
  return (
    <div className="navegador">
      <nav className="textoNav navbar navbar-expand-lg bg-body-blue">
        <div className="container-fluid text-center">
          <div className="row collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item col-2">
                <img className="icoLibro" src={Libros} alt="..." />
              </li>
              <li className="nav-item col-2">
                <Link to={"/"} className="link-secondary"> Inicio </Link>
              </li>
              <li className="nav-item col-2">
                <Link to={"/catalogo"} className="link-secondary"> Catalogo </Link>
              </li>
              <li className="nav-item col-2" >
                <Link to={"/contactos"} className="link-secondary"> Contactos </Link>
              </li>
              <li className="nav-item col-2">
                <Link to={"/nosotros"} className="link-secondary"> ¿ Quienes somos ? </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navegador;
