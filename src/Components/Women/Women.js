import Cards from '../Cards/Cards';
import './Women.css'

function Women(){
    return(
      <div className='cards'>
            <Cards 
        image= "5"
        tittle = "Falda"
        detalle = "Falda lápiz gris"
        valor = "$90.000"
      />
      <Cards 
        image= "6"
        tittle = "Gabán"
        detalle = "Gabán con botones camel"
        valor = "$120.000"
      />
      <Cards 
        image= "2"
        tittle = "Palazzo Pants"
        detalle = "Palazzo Pants con ajuste, verde"
        valor = "$80.000"
      />
      <Cards 
        image= "3"
        tittle = "Bolso"
        detalle = "Cartera manos libres camel"
        valor = "$80.000"
      />
      <Cards 
        image= "4"
        tittle = "Mocasines"
        detalle = "Zapatos negros con accesorios dorados"
        valor = "$80.000"
      />
      <Cards 
        image= "1"
        tittle = "Camisa"
        detalle = "Camisa blanca con botones"
        valor = "$60.000"
      />
        </div>
    );
}

export default Women