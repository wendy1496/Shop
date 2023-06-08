import './App.css';
import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home';
import Women from './Components/Women/Trend';
import Detalle from './Components/Detalle/Detalle';
import Login from './Components/Login/Login'
import { Data } from './Context/Data';
import Carrito from './Components/Carrito/Carrito';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Data>
    <div className="App">
      <Router>
      <NavBar/>
      <Carrito></Carrito>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Trend' element={<Women/>}></Route>
          <Route path='/Trend/:id' element={<Detalle/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      </Router>
      
    </div>
    </Data>

  );
}

export default App;
