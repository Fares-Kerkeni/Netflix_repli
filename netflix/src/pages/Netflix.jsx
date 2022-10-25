import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa"
import {AiOutlineInfoCircle} from "react-icons/ai"
const Netflix = () => {
    const [isScrolled, setisScrolled]= useState(false);
    //pour enlever la bar au scroll
    window.onscroll =()=>{
        setisScrolled(Window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    return (
        <div className='netflix'>
            <Navbar isScrolled={isScrolled}/>
            <div className='hero'>
                <img src={backgroundImage} alt="" />

            </div>
            <div className='container'>
                <div className='logo'>
                    <img src={MovieLogo} alt="" />

                </div>
                <div className='button'>
                    <button>
                        <FaPlay/> Play
                    </button>
                    <button>
                        <AiOutlineInfoCircle/> More infos
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Netflix