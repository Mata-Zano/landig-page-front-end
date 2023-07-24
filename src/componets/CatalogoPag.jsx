import { useEffect,useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import PiePag from "./PiePag";
import Navegador from "./Navegador";
import './style.css'
//Imagenes
import Ring from '../assets/lordRing.jpg'
import Meta from '../assets/metafisica.jpg'
import Spinoza from "../assets/spinoza.jpg"
import Principe from '../assets/elPrincipe.jpg'
import Armadura from '../assets/caballeroArmadura.jpg'
import Medita from '../assets/meditaciones.jpg'
import Dune from '../assets/dune.jpg'
import Davinci from '../assets/davinci.jpg'
import Divina from '../assets/divinaComedia.jpg'

function CatalogoPag() {
  return (
    <div>
      <div className="row">
        <h1 className="titulo text-center">Catalogo principal</h1>
      </div>
      <div className="row">
        <Navegador />
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Ring} alt="" />
            <div class="card-body">
              <h4 class="card-title">El señor del los anillos</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Meta} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Metafisisca</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Spinoza} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">En busca de Spinoza</h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Armadura} alt="" />
            <div class="card-body">
              <h4 class="card-title">El caballero de la armadura oxidad</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Principe} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">El principe</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Medita} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Meditaciones</h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Divina} alt="" />
            <div class="card-body">
              <h4 class="card-title">La divina comedia</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Davinci} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">El codigo de Da Vinci</h4>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card text-start">
            <img class="card-img-top libro" src={Dune} alt="Title" />
            <div class="card-body">
              <h4 class="card-title">Dune</h4>
            </div>
          </div>
        </div>
        
      </div>
      <br />
      <footer className="row">
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
