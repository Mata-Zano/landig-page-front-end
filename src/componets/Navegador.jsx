import { Route, Routes, Link } from "react-router-dom";
import Libros from "../assets/logo_libro.png";
import "./style.css";
function Navegador() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-blue">
        <div className="container-fluid text-center">
          <div className="collapse navbar-collapse row" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item col-2">
                <img className="icoLibro" src={Libros} alt="..." />
              </li>
              <li className="nav-item col-2"  >
                <Link to={"/"}> Inicio </Link>
              </li>
              <li className="nav-item col-2">
                <Link to={"/catalogo"}> Catalogo </Link>
              </li>
              <li className="nav-item col-2">
                <Link to={"/contactos"}> Contactos </Link>
              </li>
              <li className="nav-item col-2" >
                <Link to={"/nosotros"}> ¿ Quienes somos ? </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navegador;
