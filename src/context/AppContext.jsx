import { createContext, useContext, useState } from "react";
import { listOfMovies, listOfUsers } from "../constants/constants";

const AppContext=createContext();

const AppProvider=({children})=>{
    const [selectedMovie,setSelectedMovie]=useState(null);
    const [selectedUser,setSelectedUser]=useState(null);

    const onMovieSelect=(movieData)=>{
        const {id:movieId}=movieData;
        const usersWhoWatched=listOfUsers.filter(user=>{
            return user?.movies.includes(movieId);
        })
        setSelectedMovie({
            ...movieData,
            users:usersWhoWatched
        })
    }

    const onUserSelect=(userData)=>{
        const {movies:moviesArray}=userData;
        const moviesWatched=listOfMovies.filter(movie=>{
            return moviesArray.includes(movie.id);
        });
        setSelectedUser({
            ...userData,
            moviesWatched
        })
    }

    const data={
        selectedMovie:selectedMovie,
        setSelectedMovie:(e)=>onMovieSelect(e),
        selectedUser:selectedUser,
        setSelectedUser:(e)=>onUserSelect(e)
    }

    return(
        <AppContext.Provider value={data}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppData=()=>{
    return useContext(AppContext);
}

export default AppProvider;