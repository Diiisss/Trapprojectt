import React from 'react'
import { Link } from 'react-router-dom';
 

export default function NavBar () {


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
                
   </div>
  )
}
