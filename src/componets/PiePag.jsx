import { Route, Routes, Link } from "react-router-dom";
import Face from "../assets/facebook.svg";
import Twiter from "../assets/twitter.svg";
import Insta from "../assets/instagram.svg";
import "./style.css";

function PiePag() {
  return (
    <div className="footer">
      <nav className="navbar navbar-expand-lg bg-">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="row collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="col   nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.facebook.com">
                  <img src={Face} className="" alt="..." />
                </a>
              </li>
              <li className="col nav-item">
                <a className="nav-link" href="https://twitter.com/">
                  <img src={Twiter} className="" alt="..." />
                </a>
              </li>
              <li className="col nav-item">
                <a className="nav-link" href="https://www.instagram.com/">
                  <img src={Insta} />
                </a>
              </li>
              <li>
                <p className="col derechos">Derechos reservados 2023 - Biblioteca de Alegandía</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default PiePag;
