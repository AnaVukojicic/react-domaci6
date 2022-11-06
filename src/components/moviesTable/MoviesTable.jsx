import React, { useState, useEffect } from "react";
import { useAppData } from "../../context/AppContext";
import Search from "../search/Search";
import Table from "../table/Table";
import './MoviesTable.css'
import {listOfMovies} from '../../constants/constants'
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const MoviesTable=()=>{
    const [list,setList]=useState(listOfMovies);
    const [query,setQuery]=useState('');
    const debouncedQuery=useDebounce(query,1000);
    const navigate=useNavigate();
    const headers=[
        { title: 'Id', property: 'id' },
        { title: 'Name', property: 'name' },
        { title: 'Year', property: 'year'},     
        { title: 'Genre', property: 'genre'}
    ];

    const setMoviesQuery=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        setList(listOfMovies.filter(movie=>movie.name.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery]) 

    const onRowClick=(e)=>{
        const {id:movieId}=e;
        navigate('/movie/'+movieId);
    }
    
    return(
        <div className="movies-table-container">
            <Search onSearch={(e)=>setMoviesQuery(e)} placeholder="Find movie" inputPlaceholder={query}/>
            <Table headers={headers} rows={list} onRowClick={(e)=>onRowClick(e)}/>
        </div>
    )
}

export default MoviesTable;