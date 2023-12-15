import React ,{useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import movie from './Movie'

const MovieList = ({search,rate,addMovie}) => {
    const [movies,setMovies] = useState(movie);

    const handleDelete=(titleDelete)=>{
        setMovies(movies.filter( el => el.title !== titleDelete))
    }

    useEffect(() => {
        if(addMovie){
            setMovies([...movies,addMovie])}
    }, [addMovie, movies]);

    return(
        <div style={{margin:'30px'}}>
            {movies.filter(movie => movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && movie.rating >= rate)
                    .map((el,i)=> <MovieCard handleDelete={handleDelete} key={i} movie={el}/> )}        
        </div>
    ) ;

};
export default MovieList;