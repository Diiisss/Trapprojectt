import React, {useContext,useState }from 'react';
import { myContext } from '../HighordercomponentHOC';


export default function Item ({producto}) {
  
  const [darkMode,setDarkMode] = useContext(myContext);
  

  return <> 
    <div style={{background:darkMode ? 'black':'white', color:darkMode ? 'black':'white', border : "1px solid green", padding: '10px',margin: "10px"}}> <div/>
    <br />
    Item
    <br />
     {JSON.stringify(producto)}
     <br />
     <button onClick={() =>{
        setDarkMode(!darkMode);
      }}>
      
     Cambiar a Dark Mode
      </button>
    </div>;  
      </>
}
