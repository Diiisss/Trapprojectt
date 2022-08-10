import { createContext, useState } from 'react';
export const myContext =createContext();


export default function HighordercomponentHOC({children}) {

const[darkMode,SetDarkMode] = useState(false);
const[logueado,setLogueado] = useState(true);

  return (
  <>
     <myContext.Provider value={{darkMode,SetDarkMode,logueado,setLogueado}}>
         {children}
        pONER ALGO PONER ALGO PONER ALGO ES PARA QUE SE VEA AASDASSAKN
     </myContext.Provider>
   </>

  );
}






  

