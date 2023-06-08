import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image';
import Cards from '../Cards/Cards';
import React, {useContext} from 'react';
import { dataContext } from '../../Context/Data';

export default function Home(){
   const value = useContext(dataContext)
    const [productos] = value.productos
    return(
        <div className="main">
        <Image src="https://cdn1.totalcommerce.cloud/unipunto/web_content/assets/Estilos-universales-moda%20(2).jpg" fluid />
        <h2>Productos destacados</h2>

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

    );
}

