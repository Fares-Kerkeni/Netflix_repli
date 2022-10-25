import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import {FaSearch,FaPowerOff } from "react-icons/fa"
import {firebaseAuth} from "../utils/firebase-config"
import {signOut} from "firebase/auth"
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Navbar = ({isScrolled}) => {
    const navigate = useNavigate();
    const links =[
        {name: "Home", link :"/"},
        {name: "tv shows", link :"/tv"},
        {name: "movies", link :"/movies"},
        {name: "mylist", link :"/mylist"},
    ];
    onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
        if(!CurrentUser)navigate("/login")
    })
    const[showSearch, setshowSearch] = useState(false)
    const[inputHover, setinputHover] = useState(false)

    return (
        <div className='navbar'>
            <nav className={`${isScrolled ? "scrolled" : ""}`}>
                <div className='logo_kink'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    
                        <ul className='lien'>
                        {
                            links.map(({name,link})=>{
                                return(
                                    <li key={name}>
                                        <Link className='color_li' to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                
                <div className={`search ${showSearch ? "show-search" : ""}`}>
                    <button onFocus={() => setshowSearch(true)} onBlur={()=> {
                        if(!inputHover) setshowSearch(false);
                    }}>
                        <FaSearch/>
                    </button>
                    <input className="input"type="text" placeholder='search'
                        onMouseEnter={()=> setinputHover(true)}
                        onMouseLeave={()=> setinputHover(false)}
                        onBlur={()=> {
                            setshowSearch(false)
                            setinputHover(false)
                        }}
                    />
                     <button onClick={()=> signOut(firebaseAuth)}> 
                        <FaPowerOff/>
                    </button>
                </div>
               
            </nav>
        </div>
    );
};

export default Navbar;