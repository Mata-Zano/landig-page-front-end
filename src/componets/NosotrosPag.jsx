import { Route, Routes, Link } from "react-router-dom";
import PiePag from "./PiePag";
import Navegador from "./Navegador";
import Equipo from "../assets/equipo.jpg";
import Mision from "../assets/mision.jpg";

function NosotrosPag() {
  return (
    <div className="nosotros">
      <div className="row text-center">
        <h1 className="titulo text-center">Biblioteca de Alejandria</h1>
      </div>
      <Navegador className="row" />
      <div className="row">
        <div className="col text-center">
          <br />
          <br />
          <div class="card">
            <div class="texto card-body">
              <p>
                Nuestra Misión: En "La Librería de Alegandria", nos esforzamos
                por ser el destino literario perfecto para cada visitante.
                Nuestra misión es promover la magia de la lectura y crear un
                espacio donde la imaginación no tenga límites. Queremos ser el
                lugar donde las palabras cobren vida y los corazones encuentren
                inspiración en cada historia contada.
              </p>
              <p>
                Únete a Nuestra Comunidad: No solo somos una librería, sino una
                comunidad de soñadores y exploradores literarios. Te invitamos a
                formar parte de nuestra familia y compartir tu pasión por la
                lectura. Únete a nuestros clubes de lectura, eventos y
                actividades para sumergirte en un mundo lleno de emociones y
                descubrimientos. Gracias por ser parte de "La Librería de
                Alegandria". Esperamos verte pronto entre nuestras estanterías,
                explorando nuevos mundos y disfrutando de cada página que
                giremos juntos. ¡Hagamos de cada día una nueva aventura
                literaria!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <img src={Equipo} alt="" className="imgNosotro" />
        </div>
        <div className="row ">
          <div className="col">
            <img src={Mision} alt="" className="imgNosotro" />
          </div>
          <div className="col text-center">
            <br />
            <br />
            <div class="card">
              <div class="texto card-body">
                <p>
                  Nuestro Equipo: Detrás de "La Librería de Alegandria" hay un
                  equipo apasionado de bibliófilos y amantes de la literatura.
                  Nos enorgullecemos de conocer a nuestros clientes y ofrecer
                  recomendaciones personalizadas para que cada visita sea una
                  experiencia única. Nuestro objetivo es crear un ambiente
                  acogedor y cálido donde todos se sientan bienvenidos.
                </p>
                <p>
                  Nuestro Compromiso: En "La Librería de Alegandria", creemos
                  que la literatura tiene el poder de enriquecer nuestras vidas
                  y expandir nuestras mentes. Nos comprometemos a fomentar la
                  lectura en la comunidad, colaborar con eventos literarios y
                  brindar apoyo a escritores locales. Creemos que cada historia
                  es valiosa y que todos tienen un lugar especial en el mundo de
                  la literatura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <PiePag className="row" />
    </div>
  );
}
export default NosotrosPag;
