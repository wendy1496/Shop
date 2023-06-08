import './Login.css'
import { useState } from 'react';
import Axios from 'axios'

function Login(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (e)=>{
            Axios.post("http://localhost:3001/Login",{
            email: email,
            name: name,
            password: password
        }).then(()=>{
            alert("UserCreated");
            clean()
        }) 
    }

    const login = (e)=>{
        
        Axios.get('http://localhost:3001/api/Login',
        email
    ).then((data)=>{
        if(data === null){
            alert("Error")
        }else{
            alert("Ha iniciado Sesión")
            
        }
    })
    .catch((error)=> console.log(error))
    
}

    const clean = () =>{ 
        setName("");
        setEmail("");
        setPassword("");
    }

    return(
        <div>
            <div className="body2" id="body2">
            <div className="main2">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Registrar</label>
                        <input onChange={(event)=>{setName(event.target.value);}} type="text" name="name" placeholder="Name"/>
                        <input onChange={(event)=>{setEmail(event.target.value);}} type="email" name="email" placeholder="Email"/>
                        <input onChange={(event)=>{setPassword(event.target.value);}} type="password" name="password" placeholder="Contraseña"/>
                        <button onClick={createUser} type="submit">Registrar</button>
                    </form>
                </div>
                <div className="login">
                    <form>
                        <label htmlFor="chk" aria-hidden="true">Inicio</label>
                        <input onChange={(event)=>{setEmail(event.target.value);}} type="email" name="email" placeholder="Email" />
                        <input onChange={(event)=>{setPassword(event.target.value);}} type="password" name="password" placeholder="Contraseña" />
                        <button onClick={login} type="submit">Inicio</button>
                    </form>
                </div>
            </div></div>

        </div>
    )
}

export default Login