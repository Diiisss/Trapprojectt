import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import { myContext } from '../HighordercomponentHOC';


export default function ItemListContainer() {
  const [productos, setProductos] =useState([]);
  const  {darkMode, setDarkMode} = useContext(myContext);

  const { idCategoria} = useParams();
 

  useEffect(()=>{
    
 
  let productosharcode =[
    {id: 100, name:'zapato Nike', price :100, idCategoria : 'deportivo'},
    {id: 101, name:'zapato Addidas', price :98, idCategoria : 'deportivo'},
    {id: 102, name:'zapato Puma', price :75, idCategoria : 'deportivo'},
    {id: 103, name:'zapato Lotto', price :65, idCategoria : 'deportivo'},
    {id: 104, name:'remera Nike', price :85, idCategoria : 'elegance'},
    {id: 105, name:'remera Addidas', price :74, idCategoria : 'elegance'},
    {id: 106, name:'remera Puma', price :53, idCategoria : 'elegance'},
    {id: 107, name:'remera Lotto', price :42, idCategoria : 'elegance'},
    {id: 108, name:'mochila Nike', price :255, idCategoria : 'escolar'},
    {id: 109, name:'mochila Adiddas', price :265, idCategoria : 'escolar'},
  ];
  
  const promesaProductos = new Promise((resolve, reject) => {
    setTimeout(()=>{
      if(idCategoria){
        resolve(productosharcode);

      }else{
        resolve(productosharcode.filter(producto =>producto.idCategoria === idCategoria))

      }
      resolve(productosharcode);
    
     
    },500);
  })
  promesaProductos.then((resolve)=>{
    setProductos(resolve);

  })

  },[idCategoria]);
  return <>
  <div  style={{background:darkMode ? 'black':'white', color: darkMode ? 'black':'white', border : "1px solid blue", padding: '10px',margin: "10px"}}> 
    ITEM LIST CONTAINER
   <br />
   <ItemList productos= {productos}/>;
   </div>
  </> 

  
      
    
}
