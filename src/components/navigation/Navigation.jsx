import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.scss';

const Navigation=()=>{
    return (
        <div className={classes['container']}>
            <Link to='/home' className={classes['link']}>Home</Link>
            <Link to='/user' className={classes['link']}>Users</Link>
            <Link to='/movie' className={classes['link']}>Movies</Link>
        </div>
    );
}

export default Navigation;