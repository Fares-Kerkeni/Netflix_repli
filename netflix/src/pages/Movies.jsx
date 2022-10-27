import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import SelectGenres from '../components/SelectGenres';
import Slider from '../components/Slider';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
const Movies = () => {
    const navigate = useNavigate();

    const [isScrolled, setisScrolled]= useState(false);
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies);
    const genres = useSelector((state)=> state.netflix.genres);
    const dispatch = useDispatch();
    
    useEffect(()=> {
       dispatch(getGenres());
    }, []);

    useEffect(()=>{
        if (genresLoaded) dispatch(fetchMovies({type: "all"}))
    },[genresLoaded]);
    //pour enlever la bar au scroll
    window.onscroll =()=>{
        setisScrolled(Window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    onAuthStateChanged(firebaseAuth,(CurrentUser)=>{
       
    })
    return (
        <div className='movies'>
            <div className='navbar'>
                <Navbar isScrolled={isScrolled}/>
            </div>
            
            <div className='data'>
                <SelectGenres genres={genres} type="movie"/>
                {movies.length ? <Slider movies={movies}/>:<NotAvailable/> }
               
            </div>
            
            
        </div>
    );
};

export default Movies;