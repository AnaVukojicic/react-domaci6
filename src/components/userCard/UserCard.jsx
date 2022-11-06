import React from "react";
import './UserCard.css'

const UserCard=({user='',firstName,lastName,age,city,image,onCardClick=()=>{}})=>{
    return(
        <div className="user-card" onClick={()=>onCardClick(user)}>
            <div className="img-div">
                <img src={image} alt=''/>
            </div>
            <div className="content-div">
                <p><b>{firstName} {lastName}</b></p>
                <p>Age: {age}</p>
                <p>City: {city}</p>
            </div>
        </div>
    )
}

export default UserCard;