import { useState } from "react"
import Logo from '../../Images/logo.png'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {dataContext} from '../../Context/Data'
import { useContext } from 'react'

export default function Menu() {
        const [isOpen, setIsOpen] = useState(false)
        const value = useContext(dataContext)
        const [menu, setMenu] = value.menu
        const [carrito] = value.carrito

        const toogleMenu = () =>{
            setMenu(!menu)
        }
        return(
            <div className="navbar">
                <div className="nav_logo"><a href="/" to="/"><img src={Logo} alt="logo" className="brand-name"/></a></div>
                <div className={`nav_items ${isOpen && "open"}`}>
                    <a href="/" to="/">Home</a>
                    <a href="/Trend" to="/Trend">Trend</a> 
                </div>
                <div>
                    
                </div>
                <div className="icon">
                <a href="/Login" to="/Login">
                    <FontAwesomeIcon icon={faUser} className="ic" />
                    </a>
                    
                        <FontAwesomeIcon icon={faCartShopping} className="ic" onClick={toogleMenu}/>
                    <span id="count">{carrito.length}</span>
                </div>
                <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
}