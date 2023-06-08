import React from 'react';
import './Cards.css'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {dataContext} from '../../Context/Data'
import { useContext } from 'react'
import {Link} from 'react-router-dom'

function Cards({
    id,
    image,
    tittle,
    detalle,
    price
}){

    const value = useContext(dataContext);
    const addCarrito = value.addCarrito
    return(

            
                <div className='producto' >
                <Link to={`/Trend/${id}`}>
                <img
                className='imagen' 
                src={image}
                alt="Shop"
                />
                </Link>
                <h4>{tittle}</h4>
                <p>{detalle}<br></br>
                <b>${price}</b>
                </p>
                <div className='card-foot'>
                <button className='btn' id='boton' onClick={()=> addCarrito(id)} ><FontAwesomeIcon icon={faCartShopping} className="i" /></button>
                <Link className='btn' to={`/Trend/${id}`}>Ver más</Link>
                </div>
               
    </div>
        
    );
}

export default Cards;