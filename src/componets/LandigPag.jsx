import React, {useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navegador from "./Navegador";
import PiePag from "./PiePag";
import Carrusel from "./Carrusel";
function LandigPag() {
  const [correo, setCorreo] = useState("")

  const handleCorreo=(eveneto)=>{
    setCorreo(eveneto.target.value);
  }
  const registrar = () => {
    if (correo !== "") {
      alert("El correo : "+ correo +", a sido agregado con exito."); 
    }
    else{
      alert("Debe ingresar algun correo.")
    }
  };
  return (
    <div className="container-flex">
      <div className="row" id="">
        <h1 className="titulo text-center">
          Bienvenidos a la Biblioteca de Alegandría
        </h1>
      </div>
      <Navegador className="row" />
      <br />
      <div className="row">
        <br />
        <div className="col-6">
          <div class="card">
            <div class="card-body">
              <p className="texto text-start">
                Sumérgete en un mundo lleno de letras, aventuras y conocimiento.
                En la biblioteca de Alegandria, nuestra pasión por los libros nos impulsa
                a compartir historias cautivadoras y experiencias literarias
                inolvidables. Te damos la más cordial bienvenida a nuestro
                rincón literario, donde cada página se convierte en un portal
                hacia nuevos horizontes.
              </p>
              <p className="texto">
                Queremos compartir contigo los momentos más emocionantes de la
                literatura y mantenerte al tanto de nuestras novedades, eventos
                literarios y promociones exclusivas. Para no perderte ni una
                sola palabra, ¡te invitamos a formar parte de nuestra comunidad!
                Ingresa tu correo electrónico a continuación y únete a nuestra
                lista de suscriptores. Serás el primero en recibir noticias,
                recomendaciones de lectura y sorpresas especiales.
              </p>
              <p className="texto">
                Además, te aseguramos que tu bandeja de entrada estará llena de
                inspiración y pasión por los libros. ¡Esperamos verte pronto en
                nuestras estanterías virtuales!
              </p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Carrusel />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div class="email card">
            <div class="card-body">
              <label htmlFor="correo" className="texto"> Registre su Email: </label>
              <div class="input-group mb-3">
                <input
                  type="email"
                  className="texto form-control"
                  placeholder="Ejemplo_correo@ejemplo.com"
                  aria-label="Ejemplo_correo@ejemplo.com"
                  aria-describedby="button-addon2"
                  onChange={handleCorreo}
                />
                <button
                  className="texto btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={registrar}
                >
                  Registrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6"></div>
      </div>
      <div className="row">
        <br />
        <br />
      </div>
      <div className="row">
        <PiePag />
      </div>
    </div>
  );
}
export default LandigPag;
