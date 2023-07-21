import { Route, Routes, Link } from "react-router-dom";
function Inicio() {
  return (
    <>
      <h1>Bienvenidos a Inicio</h1>
      <Link to={"/proyectos"}>Ir a Proyectos</Link>
      <br />
      <Link to={"/contactos"}>Ir a Contactos</Link>
      <br/>
      <Link to={"/landig"}>Ir a Landig</Link>
    </>
  );
}
export default Inicio;
  