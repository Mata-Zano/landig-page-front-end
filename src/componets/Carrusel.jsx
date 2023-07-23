import { Route, Routes, Link } from "react-router-dom";
import Estante from '../assets/libreria.jpg'
import Leyendo from '../assets/leyendo.jpg'
import Leyendo2 from '../assets/leyendo2.jpg'
import './style.css'
function Carrusel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Estante} className="estante" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Leyendo} class="leyendo" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={Leyendo2} class="leyendo2" alt="..."/>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Carrusel;
