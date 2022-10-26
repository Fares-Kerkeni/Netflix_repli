import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa"
import {AiOutlineInfoCircle} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies, getGenres } from '../store';

const Netflix = () => {
    const navigate = useNavigate();

    const [isScrolled, setisScrolled]= useState(false);
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const dispatch = useDispatch();
    
    useEffect(()=> {
       dispatch(getGenres());
    }, []);

    useEffect(()=>{
        if (genresLoaded) dispatch(fetchMovies({type: "all"}))
    });
    //pour enlever la bar au scroll
    window.onscroll =()=>{
        setisScrolled(Window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    
    return (
        <div className='netflix'>
            
            <div className='hero'>
                <Navbar isScrolled={isScrolled} className="nav"/>
                <div className='container'>
                    <div className='logo'>
                        <img src={MovieLogo} alt="" />
                        <div className='buttom'>
                            <button className='play' onClick={()=> navigate('/player')}>
                                <FaPlay/> Play
                            </button>
                            <button className='more'>
                                <AiOutlineInfoCircle/> More infos
                            </button>
                        </div>
                        
                    </div>
                   </div>
            </div>
           <Slider movies={movies}/>
            
        </div>
    )
}

export default Netflix