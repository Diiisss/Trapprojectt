import './App.css';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import NavBar from './componentes/Navbar';
import TestEventos from './componentes/TestEventos';
import HighordercomponentHOC from './componentes/HighordercomponentHOC';

function App() {


  return (
    <>

    <HighordercomponentHOC>
    <BrowserRouter>
    <h1>MENU 👇</h1>
    <NavBar/>
       <Routes>
          <Route path ='/' element ={<ItemListContainer/>}/>
          <Route path ='/category/:idCategoria' element ={<ItemListContainer/>}/>
          <Route path ='/item/:idProducto' element ={<ItemDetailContainer/>}/>
          <Route path ='/testeventos' element ={<TestEventos/>}/>
          <Route path ='/*' element ={<p> 4 0 4</p>}/>
      </Routes>
      <h6>ACA  VA EL FOOTER</h6>
    </BrowserRouter>
    </HighordercomponentHOC>


    </>
    
  );
}

export default App;
