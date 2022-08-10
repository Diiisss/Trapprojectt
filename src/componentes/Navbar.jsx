
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContext } from './HighordercomponentHOC';

export default function NavBar () {

  const {logueado,setLogueado} = useContext(myContext);
  return (
    <div>
                     
                    <Link to = {'/'}> Ir a Home</Link> 
                    <br />
                    <Link to ='/category/deportivo'>Deportivo</Link>
                    <br />
                    <Link to ='/category/elegance'>Elegance</Link>
                    <br />
                    <Link to ='/category/escolar'>Escolar</Link>
                    <br />
                   {logueado ? 'LOGUEADO!' : ':( NOESTALOGUEADO'}
                    <button onClick={() => setLogueado(!logueado)}>Salir</button>
                
   </div>
  )
}
