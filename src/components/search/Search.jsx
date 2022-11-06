import React from "react";
import './Search.css';

const Search=({onSearch=()=>{},inputPlaceholder='',placeholder})=>{
    return(
        <div> 
            <input className="input" type={'text'} value={inputPlaceholder} onChange={(e)=>onSearch(e.target.value)} placeholder={placeholder}/>
        </div>
    )
}

export default Search;