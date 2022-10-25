import { createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import {firebaseAuth} from "../utils/firebase-config"

const Signup = () => {
    const [showPassword,setshowPassword]=useState(false);
    const navigate = useNavigate();
    const [formValues, setformValues] = useState({
        email:"",
        password:""
    });
    //gestion de la connexion

    const handleSignIn = async () =>{
        try{
            //envoie direct a firebase
            const {email,password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email,password)
        }catch(err){
            console.log(err)
        }
    };
    //geree la connexion sur le site 
    onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
        if(CurrentUser)navigate("/")
    })
    return (
        <div className='signup' showPassword={showPassword}>
            <Header/>
            <div className='container'>
                <div className='text'>
                    <h1>Unlimited movies, TV </h1>
                    <h1>shows and more</h1>
                    <h4>Watch anywhere. Cancel anytime.</h4>
                    <h6>Ready to watch? Enter your email to create or restart membership</h6>
                </div>
                
                <div className='form'>
                    <div className='input'>
                        <input type="email" placeholder='Email Adress' name='email' value={formValues.email} onChange={(e)=>setformValues({...formValues,[e.target.name]: e.target.value,})}/>
                        {
                            showPassword && <input type="password" placeholder='password' name='password'value={formValues.password} onChange={(e)=>setformValues({...formValues,[e.target.name]: e.target.value,})}/>
                        }
                        
                        {
                            !showPassword && <button className='Get_Started' onClick={()=> setshowPassword(true)}>Get Started</button>
                        }
                        
                    </div>
                    
                    
                    <button className='Log_in' onClick={handleSignIn}>Sign up </button>
                </div>
                
            </div>
         
        </div>
    )
}

export default Signup