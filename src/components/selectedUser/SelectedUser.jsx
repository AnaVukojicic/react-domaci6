import React, {useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listOfMovies, listOfUsers } from "../../constants/constants";
import useDebounce from "../../hooks/useDebounce";
import UserCard from "../userCard/UserCard";
import Search from "../search/Search";
import Table from "../table/Table";
import './SelectedUser.css';

const SelectedUser=()=>{
    const [selectedUser,setSelectedUser]=useState(null);
    const {userId}=useParams();
    const [query,setQuery]=useState('');
    const [list,setList]=useState([]);
    const debouncedQuery=useDebounce(query,1000);
    const navigate=useNavigate();
    const headers=[
        {title:'Name',property:'name'},
        {title:'Year',property:'year'},
        {title:'Genre',property:'genre'},
        {title:'Actors',property:'actors'},
        {title:'Image',property:'image'},
    ]

    const setMoviesQuery=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        const user=listOfUsers.find(user=>user.id===parseInt(userId));
        const moviesWatched=listOfMovies.filter(movie=>
             user?.movies.includes(movie.id)
        );
        setSelectedUser({
            ...user,
            movies:moviesWatched
        });
    },[userId])

    useEffect(()=>{
        setList(selectedUser?.movies)
        setQuery('');
    },[selectedUser])

    useEffect(()=>{
        setList(selectedUser?.movies.filter(movie=>
            movie.name.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery]);

    const onRowClick=(e)=>{
        const {id:movieId}=e;
        navigate('/movie/'+movieId);
    }

    return(
        <div className="selected-container">
            {selectedUser?.id &&
                <>
                    <UserCard firstName={selectedUser.firstName}
                                lastName={selectedUser.lastName} 
                                age={selectedUser.age} 
                                image={selectedUser.image}
                                city={selectedUser.city}
                    />
                    <Search onSearch={(e)=>setMoviesQuery(e)} placeholder="Find movie" inputPlaceholder={query}/>
                    <Table headers={headers} rows={list} onRowClick={(e)=>onRowClick(e)}/>
                </>

            }
        </div>
    )
}

export default SelectedUser;