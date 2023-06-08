import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import './Carrito.css'
import {dataContext} from '../../Context/Data'
import { useContext } from 'react'

function Carrito(){
    const value = useContext(dataContext)
    const [menu, setMenu] = value.menu
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;


    const toogleFalse=() =>{
        setMenu(false)
    }

    const show1 = menu ? "carritos show":"carritos"
    const show2 = menu ? "carrito show":"carrito"

    const resta = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad ===1 ? item.cantidad = 1: item.cantidad -=1
            }
            setCarrito([...carrito])
        })
    }

    const suma = id =>{
        carrito.forEach(item =>{
            if(item.id === id){
                item.cantidad +=1
            }
            setCarrito([...carrito])
        })
    }

    const removeProducto = id =>{
        if(window.confirm("¿Desea eliminar el producto?")){
            carrito.forEach((item, index) => {
                if(item.id === id){
                    item.cantidad = 1;
                    carrito.splice(index,1)
                }
               
            })
            setCarrito([...carrito])
        }
    }
return(
    <div className={show1}>
        <div className={show2}>
            <div className="close" onClick={toogleFalse}>
            <FontAwesomeIcon icon={faXmark} className='x'/>
            </div>
            <h2>Su carrito</h2>
            <div className="carrito_center">
            {
                carrito.length ===0? <h2 style={{
                    textAlign:'center',
                    fontSize:"20px"
                }}>Carrito vacío</h2>:
            carrito.map((producto)=>(
                <div className="carrito_item" key={producto.id}>
                <div>
                <h3>{producto.tittle}</h3>
                <p className="price">${producto.price}</p>
                </div>
            <FontAwesomeIcon icon={faCircleMinus} className="mod" onClick={() =>resta(producto.id)} />  
            <p className='cantidad'>{producto.cantidad}</p>
            <FontAwesomeIcon icon={faCirclePlus} className="mod" onClick={() =>suma(producto.id)}/>

            <div className='remove_item' >
                <FontAwesomeIcon icon={faTrashCan} className="mod" onClick={()=>removeProducto(producto.id)}/>
            </div>
            </div>
            ))}
            
            </div>
            <div className='footer'>
                <h3>Total: ${total}</h3>
            </div>
        </div>
    </div>
)
}

export default Carrito