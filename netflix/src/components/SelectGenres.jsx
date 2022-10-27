import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataByGenre, getGenres } from '../store';

const SelectGenres = ({genres,type}) => {
    const dispatch = useDispatch()
    return (
        <div className='selectgenres'>
            <select name="genres" id="genres" onChange={e=>{
                dispatch(fetchDataByGenre({genre:e.target.value,type}))
            }}>
            {
                genres.map((genre)=>{
                    
                    return(
                       
                        <option value={genre.id} key={genre.id}>
                            {genre.name}
                        </option>
                   
                    )
                   
                }
                  
                    
                )}
               </select>
        </div>
    );
};

export default SelectGenres;