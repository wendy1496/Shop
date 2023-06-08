import React, { useState, useEffect, createContext } from "react";
import Product_data from '../Product_data'

export const dataContext = createContext()

export const Data = (props) =>{
    const [productos, setProductos] = useState([])
    const [menu, setMenu] = useState(false)
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    

    useEffect(()=>{
        const product = Product_data.items
        if(product){
            setProductos(product)
        }else{
            setProductos([])
        }
    },[])

   

    const addCarrito = (id)=>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto ya se ha agregado al carrito")
        }
    }

    useEffect(()=>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    },[carrito])

    useEffect(()=>{
        const getTotal = () =>{
            const res = carrito.reduce((prev, item)=>{
                return prev + (item.price * item.cantidad)
                
            },0)
            setTotal(res)
        }
        getTotal()
    },[carrito])

    const value={
        productos:[productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }
    return(
        <dataContext.Provider value={value}>
            {props.children}
        </dataContext.Provider>

    );
}