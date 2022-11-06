import React, { useState, useEffect } from "react";
import Search from "../search/Search";
import Table from "../table/Table";
import './UsersTable.css'
import {listOfUsers} from '../../constants/constants'
import useDebounce from "../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const MoviesTable=()=>{
    const [list,setList]=useState(listOfUsers);
    const [query,setQuery]=useState('');
    const debouncedQuery=useDebounce(query,1000);
    const navigate=useNavigate();
    const headers=[
        { title: 'Id', property: 'id' },
        { title: 'First name', property: 'firstName' },
        { title: 'Last name', property: 'lastName' },
        { title: 'Age', property: 'age'},     
        { title: 'City', property: 'city'},
        { title: 'Image', property: 'image'}
    ];

    const setUsersQuery=(term)=>{
        setQuery(term)
    }

    useEffect(()=>{
        setList(listOfUsers.filter(user=>
            user.firstName.toLowerCase().includes(query.toLowerCase()) || user.lastName.toLowerCase().includes(query.toLowerCase())))
    },[debouncedQuery]) 

    const onRowClick=(e)=>{
        const {id:userId}=e;
        navigate('/user/'+userId);
    }
    
    return(
        <div className="users-table-container">
            <Search onSearch={(e)=>setUsersQuery(e)} placeholder="Find user" inputPlaceholder={query}/>
            <Table headers={headers} rows={list} onRowClick={(e)=>onRowClick(e)}/>
        </div>
    )
}

export default MoviesTable;