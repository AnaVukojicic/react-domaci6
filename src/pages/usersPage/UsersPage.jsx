import React from "react";
import { useNavigate } from "react-router-dom";
import UserCard from "../../components/userCard/UserCard";
import { listOfUsers } from "../../constants/constants";
import classes from './UsersPage.module.scss';

const UsersPage=()=>{
    const navigate=useNavigate();
    const onCardClick=(user)=>{
        navigate('/user/'+user.id);
    }

    return(
        <div className={classes['container']}>
            {listOfUsers.map((user,index)=>{
                return <UserCard key={index}
                            firstName={user.firstName} 
                            lastName={user.lastName}
                            age={user.age}
                            city={user.city}
                            image={user.image}
                            user={user}
                            onCardClick={()=>onCardClick(user)}
                        />
            })}
        </div>
    )
}

export default UsersPage;