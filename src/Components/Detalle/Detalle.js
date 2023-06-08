import {dataContext} from '../../Context/Data'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Cards from '../Cards/Cards'

function Detalle(){

    const value = useContext(dataContext)
    const [productos] = value.productos
    const [detalle, setDetalle] = useState([])
    const addCarrito = value.addCarrito
    const params = useParams()
    
    useEffect(()=>{
        productos.forEach(producto => {
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
            }
        });
    },[params.id, productos])
    return(
        <div className='container'>
            {
                
                <div>
                    <h2 style={{textAlign: 'center'}}>Detalles del producto</h2>
                    
                    <div class="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img 
      src={detalle.image} 
      className="img-fluid rounded-start" 
      alt={detalle.tittle}
      style={{width:'70%'}}
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{detalle.tittle}</h5>
        <p className="card-text"
        style={{fontSize:'12px'}}
        >{detalle.detalle}</p>
        <p className="card-text"><b>${detalle.price}</b></p>
        <div className='card-foot'>
                <button className='btn' id='boton'  onClick={()=>addCarrito(detalle.id)}><FontAwesomeIcon icon={faCartShopping} className="i"/></button>
                <a className='btn' href='https://api.whatsapp.com/send?phone=573104596892' target='_blank' rel='noreferrer'>Whatsapp</a>
                </div>
                <br></br>
        <p className="card-text" style={{fontSize:'10px'}}>El color es el que se referencia en la imagen</p>
        <h5 className="card-title">Envío gratis por compras superiores a $200.000</h5>
      </div>
    </div>
  </div>
</div>
                </div>
            }
            <h2>Productos más buscados</h2>
            
            <div className='cards'>

            {
        productos.map((producto)=>{
          if(producto.destacado === "Si"){
          return <Cards 
          id = {producto.id}
          image= {producto.image}
          tittle = {producto.tittle}
          detalle = {producto.detalle}
          price = {producto.price}
/>
          }
          
        
        })
      }
      
        </div>
        </div>
    )
}

export default Detalle