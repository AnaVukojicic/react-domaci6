import React, {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listOfMovies, listOfUsers } from "../../constants/constants";
import useDebounce from "../../hooks/useDebounce";
import MovieCard from "../movieCard/MovieCard";
import Search from "../search/Search";
import Table from "../table/Table";
import './SelectedMovie.css';

const SelectedMovie=()=>{
    const [selectedMovie,setSelectedMovie]=useState(null);
    const {movieId}=useParams();
    const [query,setQuery]=useState('');
    const [list,setList]=useState([]);
    const debouncedQuery=useDebounce(query,1000);
    const navigate=useNavigate();
    const headers=[
        {title:'First name',property:'firstName'},
        {title:'Last name',property:'lastName'},
        {title:'Age',property:'age'},
        {title:'City',property:'city'},
        {title:'Image',property:'image'}
    ]

    const setUsersQuery=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        const movie=listOfMovies.find(movie=>movie.id===parseInt(movieId));
        const usersWhoWatched=listOfUsers.filter(user=>
             user?.movies.includes(movie.id)
        );
        setSelectedMovie({
            ...movie,
            users:usersWhoWatched
        });
    },[movieId])

    useEffect(()=>{
        setList(selectedMovie?.users)
        setQuery('');
    },[selectedMovie])

    useEffect(()=>{
        setList(selectedMovie?.users.filter(user=>
            user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery]);

    const onRowClick=(e)=>{
        const {id:userId}=e;
        navigate('/user/'+userId);
    }

    return(
        <div className="selected-container">
            {selectedMovie?.id &&
                <>
                    <MovieCard name={selectedMovie.name}
                                year={selectedMovie.year} 
                                genre={selectedMovie.genre} 
                                image={selectedMovie.image}
                                actors={selectedMovie.actors}
                    />
                    <Search onSearch={(e)=>setUsersQuery(e)} placeholder="Find user" inputPlaceholder={query}/>
                    <Table headers={headers} rows={list} onRowClick={(e)=>onRowClick(e)}/>
                </>

            }
        </div>
    )
}

export default SelectedMovie;