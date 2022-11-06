import React from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/movieCard/MovieCard";
import { listOfMovies } from "../../constants/constants";
import classes from './MoviesPage.module.scss';

const MoviesPage=()=>{
    const navigate=useNavigate();
    const onCardClick=(movie)=>{
        navigate('/movie/'+movie.id);
    }

    return(
        <div className={classes['container']}>
            {listOfMovies.map((movie,index)=>{
                return <MovieCard key={index}
                            name={movie.name}
                            year={movie.year}
                            genre={movie.genre}
                            image={movie.image}
                            actors={movie.actors}
                            movie={movie}
                            onCardClick={()=>onCardClick(movie)}
                        />
            })}
        </div>
    )
}

export default MoviesPage;