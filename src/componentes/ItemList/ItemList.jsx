import React, { useState } from 'react'
import Item from './Item';

export default function ItemList({productos, darkMode,setDarkMode}) {
  return( 
    <>
     <div style={{background:darkMode ? 'black':'white', color:darkMode ? 'black':'white', border : "1px solid red", padding: '10px',margin: "10px"}}> ITEM List
     
        
      {productos.map((producto)=>(
      <Item key={producto.id} producto={producto}/>
     ))}

    </div>; 
    </>

  );
}
