import React, { useEffect, useState } from 'react'

export default function TestApi() {
    const [actividad, setActividad]=useState({});
    const[error, setError] = useState(false);
    const [loading, setLoading]= useState(true)

          useEffect(()=>{
            fetch("https://www.boredapi.com/api/activity")
                .then((response) => response.json())
                .then((res) => {
                        setActividad(res);
                         //   console.log(user);
                  })
                  .catch((e)=>{
                    setError(true);
                  })
                  .finally(()=>{
                    setLoading(false);
                });
                    
                  },[]);

                  

             
    //   return <div>{JSON.stringify(actividad)}</div>;
    return (
        
          <div>
             {error && "ALGO  SALIO MAL"}
             <br />
             {loading && "Loading..."}
             <br />
             {actividad &&(   
              
              <>          
              Actividad:{actividad.activity} <br />
              Type: {actividad.type} <br />
              Price: {actividad.price} <br />
              </> 

             )}


           </div>
         
    );

}






// useEffect(() => {
//     fetch("https://www.boredapi.com/api/activity")
//       .then((response) => {
//         return response.json();
//       })
//       .then((res) => {
//         //throw new error("mal");
//         setActividad(res);
//       })
//       .catch((e) => {
//         setError(true);
//       })
//       .finally(() => setLoading(false));
//   }, []);
