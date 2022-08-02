import './App.css';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetail/ItemDetailContainer';
import NavBar from './Navbar';

function App() {

    

  return (
    <>
    
    <BrowserRouter>
    <h1>MENU 👇</h1>
    <NavBar/>
      


       <Routes>

          <Route path ='/' element ={<ItemListContainer/>}/>
          <Route path ='/category/:idCategoria' element ={<ItemListContainer/>}/>
          <Route path ='/item/:idProducto' element ={<ItemDetailContainer/>}/>
          <Route path ='/*' element ={<p> 4 0 4</p>}/>

          
      </Routes>
      <h6>ACA  VA EL FOOTER</h6>
    </BrowserRouter>
  

    </>
    
  );
}

export default App;
