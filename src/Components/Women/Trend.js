import Cards from '../Cards/Cards';
import './Women.css'
import React, {useContext} from 'react';
import { dataContext } from '../../Context/Data';

function Trend(){
    const value = useContext(dataContext)
    const [productos] = value.productos
    
    return(
        <div className='cards'>
            {
            productos.map(producto =>(
                <div className='cards'>
                <Cards 
                id = {producto.id}
                image= {producto.image}
                tittle = {producto.tittle}
                detalle = {producto.detalle}
                price = {producto.price}
      /></div>
            ))
            }
             
      
        </div>
    );
}
export default Trend