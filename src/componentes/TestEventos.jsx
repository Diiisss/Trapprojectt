
export default function TestEventos() {

  
  function handleOnClick(evento){
    console.log(evento);
  }
  function handleOnKeyDown(e){
    
  }


  // function handleOnChange(e){

  // }

  return (
  <> <div onClick={handleOnClick}>TestEventos</div>
  
  <imput onKeyDown={handleOnKeyDown} />
 </>
  )
}
