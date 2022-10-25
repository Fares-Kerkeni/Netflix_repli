import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {firebaseAuth} from "../utils/firebase-config"
import Header from '../components/Header'
const Login = () => {
   
    const navigate = useNavigate();
    const [formValues, setformValues] = useState({
        email:"",
        password:""
    });
    //gestion de la connexion

    const handleLogIn = async () =>{
        try{
            //envoie direct a firebase
            const {email,password} = formValues;
            await signInWithEmailAndPassword(firebaseAuth,email,password)
        }catch(err){
            console.log(err)
        }
    };
    //geree la connexion sur le site 
    onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
        if(CurrentUser)navigate("/")
    })
    return (
        <div className='login'>
            <Header/>
            <div className='title'>
                
                <div className='container_login'>
                
                    <div className='input_login'>
                        <h3>Login</h3>
                        <input type="email" placeholder='Email Adress' name='email' value={formValues.email} onChange={(e)=>setformValues({...formValues,[e.target.name]: e.target.value,})}/>
                        <input type="password" placeholder='password' name='password'value={formValues.password} onChange={(e)=>setformValues({...formValues,[e.target.name]: e.target.value,})}/>
                        <button onClick={handleLogIn} >Login</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Login