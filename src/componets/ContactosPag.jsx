import React,{useState,useEffect} from "react";
import { Route, Routes, Link } from "react-router-dom";
import Navegador from "./Navegador";
import PiePag from "./PiePag";
import { paste } from "@testing-library/user-event/dist/paste";

function ContactosPag() {
  const [nombre, setNombre] = useState("")
  const [email,setEmail] = useState("")
  const [mensaje, setMensaje] = useState("")
  
  const handleNombre = (evento) =>{
    setNombre(evento.target.value)
  }
  const handleEmail = (evento) =>{
    setEmail(evento.target.value)
  }
  const handleMensaje = (evento) =>{
    setMensaje(evento.target.value)
  }


  return (
    <div>
      <div className="row text-center">
        <h1 className="titulo">Contacto</h1>
      </div>
      <div className="row text-center">
        <Navegador />
      </div>
      <br />
      <div className="row tex-center">
        <div className="card">
          <div className="card-body">
            <p className="texto">
              En Librería de Alegandria, valoramos la interacción con nuestros
              queridos lectores y clientes. Si tienes alguna pregunta,
              comentario o simplemente deseas compartir tus pensamientos sobre
              la literatura, estaremos encantados de escucharte. Utiliza
              cualquiera de las siguientes opciones para ponerte en contacto con
              nosotros:
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="card col-4 mb-3">
          <div className="card-body">
            <h4 className="texto">Envianos un Mensaje:</h4>
            <label for="nombre" className="texto form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="texto form-control"
              id="nombre"
              placeholder="Ejemp: Luisito Perez"
              onChange={handleNombre}
            />
            <br />
            <label for="email" className="texto form-label">
              Email :
            </label>
            <input
              type="email"
              className="texto form-control"
              id="email"
              placeholder="name@example.com"
              onChange={handleEmail}
            />
            <div className="mb-3">
              <label for="mensaje" className="texto form-label">
                Mensaje
              </label>
              <textarea className="texto form-control" id="mensaje" rows="3" onChange={handleMensaje}></textarea>
              <br />
              <button type="button" className="texto btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                Enviar
              </button>
              
              <div className="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="texto modal-title" id="modalTitleId">Mensaje enviado</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="texto modal-body">
                      {"Nombre : "+ nombre +"\n Correo : "+ email+ "\n Mensaje : "+mensaje}
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="texto btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col text-left">
          <div className="card">
            <div className="card-body">
              <p className="texto">
                Si prefieres una conversación cara a cara, ¡te invitamos a
                visitar nuestra librería! Estamos ubicados en el corazón de la
                ciudad, en la siguiente dirección:
              </p>
              <p className="texto">Direccion : Laguna Verde #553</p>
              <p className="texto">Calalma, 1390000</p>
              <p className="texto">Chile</p>
              <br />
              <br />
              <p className="texto">
                Si tienes alguna consulta urgente o prefieres hablar
                directamente con nosotros, no dudes en llamarnos. Nuestro equipo
                estará encantado de atenderte: Teléfono:
              </p>
              <p className="texto">+56912437864</p>
            </div>
          </div>
        </div>
        <div className="row">
          <PiePag />
        </div>
      </div>
    </div>
  );
}
export default ContactosPag;
